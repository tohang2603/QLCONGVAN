<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Congvan;
use App\Models\Cvdenvadi;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Storage;

class CongVanController extends Controller
{
	protected $LichSuController;
	protected $CoquanController;
	protected $PhongBanController;

	public function __construct(LichSuController $LichSuController, CoQuanController $CoquanController, PhongBanController $PhongBanController)
	{
		$this->LichSuController = $LichSuController;
		$this->CoquanController = $CoquanController;
		$this->PhongBanController = $PhongBanController;
	}
	public function chiTietCongVan(Request $request, $id)
	{
		$congvan = Congvan::with(['nguoidung', 'lichsu.nguoidung'])
			->find($id);
		return Inertia::render('ChiTietCongVan', ['congvan' => $congvan]);
	}

	// Giao dien them cong van
	public function themCongVan(Request $request): Response
	{
		$coquan = $this->CoquanController->layTatCaCoQuan();
		$phongban = $this->PhongBanController->layTatCaPhongBan();
		return Inertia::render('ThemCongVan', [
			'coquan' => $coquan,
			'phongban' => $phongban
		]);
	}

	// Thêm công văn
	public function taoCongVan(Request $request)
	{
		dd($request->all());
		$request->validate([
			'socongvan' => ['required', 'string'],
			'tieude' => ['required', 'string', 'max: 255'],
			'mota' => ['required', 'string', 'max: 255'],
			'trangthai' => ['required', 'numeric'],
			'coquan' => ['required'],
			'phongban' => ['required'],
			'file' => ['required', 'mimes:pdf'],
		], [
			'socongvan.required' => 'Không được bỏ trống số công văn.',
			'socongvan.string' => 'Số công văn phải là một chuỗi.',
			'tieude.required' => 'Không được bỏ trống tiêu đề.',
			'tieude.string' => 'Tiêu đề phải là một chuỗi.',
			'tieude.max' => 'Tiêu đề không được vượt quá 255 ký tự.',
			'mota.required' => 'Không được bỏ trống mô tả.',
			'mota.string' => 'Mô tả phải là một chuỗi.',
			'mota.max' => 'Mô tả không được vượt quá 255 ký tự.',
			'file.required' => 'Không được bỏ trống file.',
			'file.mimes' => 'File phải là định dạng pdf.',
			'trangthai.numeric' => 'Không được bỏ trống trạng thái.',
		]);

		// Đường dẫn lưu file
		$file = $request->file('file');
		$ext = $file->getClientOriginalExtension();
		// Xử lý tên file, không dấu, không khoảng cách
		$filename = Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME));
		$filename_db = time() . '-' . $filename . '.' . $ext;
		// Lưu file vào thư mục storage/app/public/files
		$file = Storage::disk(name: 'public')->putFileAs('/files', $file, $filename_db);
		//thao tac CSDL tao congvan
		$congvan = Congvan::create([
			'so_cong_van' => $request->socongvan,
			'tieu_de' => $request->tieude,
			'mo_ta' => $request->mota,
			'nguoi_tao' => auth()->user()->id,
			'file' => $file,
		]);

		$newSlug = $congvan->id . '-' . Str::of($congvan->tieu_de)->slug('-');
		// dd($newSlug);
		$congvan->slug = $newSlug;
		$congvan->save();

		// Tạo dữ liệu CV Đến và Đi
		$cvDenvaDi = Cvdenvadi::create([
			'id_cong_van' => $congvan->id,
			'id_co_quan' => $request->coquan,
			'id_phong_ban' => $request->phongban,
			'trang_thai' => $request->trangthai,
		]);
		// Ghi lịch sử
		$this->LichSuController->ThemLichSu($congvan->nguoi_tao, $congvan->id, 'Tạo mới công văn');
		return redirect()->route('dashboard')->with('success', 'Thêm công văn thành công.');
	}

	// Hiện dữ liệu công văn
	public function layTatCaCongVan()
	{
		$dsCongVan = Congvan::with('nguoidung')->orderBy('created_at', 'desc')->get()->map(function ($congvan) {
			$congvan->file = Storage::url($congvan->file);
			return $congvan;
		});
		return $dsCongVan;
	}
	// trả về giao diện
	public function suaCongVan($id): Response
	{
		return Inertia::render('SuaCongVan', [
			'cv' => $this->LayThongTinCongVan($id),
		]);
	}
	public function LayThongTinCongVan($id)
	{
		$congvan = Congvan::find($id);
		return $congvan;
	}
	// làm việc với dữ liệu
	// Sửa công văn
	public function capNhatCongVan(Request $request, $id)
	{
		$congvan = Congvan::findOrFail($id); // Tìm công văn theo ID
		// Validate dữ liệu
		$request->validate([
			'socongvan' => ['required', 'string'],
			'tieude' => ['required', 'string', 'max: 255'],
			'mota' => ['required', 'string', 'max: 255'],
			'file' => ['mimes:pdf'],
		], [
			'socongvan.required' => 'Không được bỏ trống số công văn.',
			'socongvan.string' => 'Số công văn phải là một chuỗi.',
			'tieude.required' => 'Không được bỏ trống tiêu đề.',
			'tieude.string' => 'Tiêu đề phải là một chuỗi.',
			'tieude.max' => 'Tiêu đề không được vượt quá 255 ký tự.',
			'mota.required' => 'Không được bỏ trống mô tả.',
			'mota.string' => 'Mô tả phải là một chuỗi.',
			'mota.max' => 'Mô tả không được vượt quá 255 ký tự.',
			'file.mimes' => 'File phải là định dạng pdf.',
		]);

		// Cập nhật công văn
		$congvan->update([
			'so_cong_van' => $request->socongvan,
			'tieu_de' => $request->tieude,
			'mo_ta' => $request->mota,
			// 'file' => $request->file('file'), // Nếu có file thì xử lý thêm
		]);

		// Nếu có file mới thì xử lý
		if ($request->hasFile('file')) {
			// Xoá file cũ
			// Storage::delete('public/' . $congvan->file);
			// Đường dẫn lưu file
			$file = $request->file('file');
			$ext = $file->getClientOriginalExtension();
			// Xử lý tên file, không dấu, không khoảng cách
			$filename = Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME));
			$filename_db = time() . '-' . $filename . '.' . $ext;
			// Lưu file vào thư mục storage/app/public/files
			$file = Storage::disk(name: 'public')->putFileAs('/files', $file, $filename_db);
			// Cập nhật file mới
			$congvan->file = $file;

			$newSlug = $congvan->id . '-' . Str::of($congvan->tieu_de)->slug('-');
			$congvan->slug = $newSlug;
			$congvan->save();

			// Ghi lịch sử

		}
		$this->LichSuController->ThemLichSu(auth()->user()->id, $congvan->id, 'Cập nhật công văn');
		return redirect()->route('dashboard')->with('success', 'Cập nhật công văn thành công.');
	}
	// Xóa công văn
	public function xoaCongVan($id)
	{
		$congvan = Congvan::findOrFail($id); // Tìm công văn theo ID
		if (Storage::disk('public')->delete($congvan->file)) {
			// Xoá lịch sử
			$this->LichSuController->XoaLichSu($congvan->id);
			// Xoá công văn
			$congvan->delete();
			return redirect()->route('dashboard')->with('success', 'Xóa công văn thành công.');
		}
		return redirect()->route('dashboard')->with('error', 'Xóa công văn không thành công.');
	}

}
