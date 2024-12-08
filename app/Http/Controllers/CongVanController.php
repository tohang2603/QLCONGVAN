<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Congvan;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Storage;

class CongVanController extends Controller
{

	// Giao dien them cong van
	public function themCongVan(Request $request): Response
	{
		return Inertia::render('ThemCongVan', [
			'status' => session('status'),
		]);
	}

	// Thêm công văn
	public function taoCongVan(Request $request)
	{
		$request->validate([
			'socongvan' => ['required', 'string'],
			'tieude' => ['required', 'string', 'max: 255'],
			'mota' => ['required', 'string', 'max: 255'],
			'file' => ['required', 'mimes:pdf,doc,docx'],
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
			'file.mimes' => 'File phải là định dạng pdf, doc hoặc docx.',
		]);

		// Đường dẫn lưu file
		$file = $request->file('file');
		$ext = $file->getClientOriginalExtension();
		// Xử lý tên file, không dấu, không khoảng cách
		$filename = Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME));
		$filename_db = time() . '-' . $filename . '.' . $ext;
		$path = $file->storeAs('public/files', $filename_db);

		// dd($path);

		//thao tac CSDL tao congvan
		$congvan = Congvan::create([
			'so_cong_van' => $request->socongvan,
			'tieu_de' => $request->tieude,
			'mo_ta' => $request->mota,
			'nguoi_tao' => auth()->user()->id,
			'file' => $path,
			// 'file' => $request->file('file'),
		]);

		$newSlug = $congvan->id . '-' . Str::of($congvan->tieu_de)->slug('-');
		// dd($newSlug);
		$congvan->slug = $newSlug;
		$congvan->save();

		return redirect()->route('dashboard')->with('success', 'Thêm công văn thành công.');
	}

	// Hiện dữ liệu công văn
	public function layTatCaCongVan()
	{
		$congvan = Congvan::all();
		return $congvan;
	}
// trả về giao diện
	public function suaCongVan($id): Response
	{
		return Inertia::render('SuaCongVan', [
			'cv'=> $this->LayThongTinCongVan($id),			
		]);
	}
	public function LayThongTinCongVan($id)
	{
		$congvan= Congvan::find($id);
		return $congvan;
	}
// làm việc với dữ liệu
	// Sửa công văn
	public function capNhatCongVan($id, Request $request)
	{
		$congvan = Congvan::findOrFail($id); // Tìm công văn theo ID

		// Validate dữ liệu
		$request->validate([
			'socongvan' => ['required', 'string'],
			'tieude' => ['required', 'string', 'max: 255'],
			'mota' => ['required', 'string', 'max: 255'],
		]);

		// Cập nhật công văn
		$congvan->update(
			[
				'so_cong_van' => $request->socongvan,
				'tieu_de' => $request->tieude,
				'mo_ta' => $request->mota,
				'nguoi_tao' => auth()->user()->id,
				// 'file' => $request->file('file'), // Nếu có file thì xử lý thêm
			],
			[
				'socongvan.required' => 'Không được bỏ trống dòng này.',
				'socongvan.string' => 'Số công văn phải là một chuỗi.'
			]
		);

		// Cập nhật slug nếu tiêu đề thay đổi
		$newSlug = $congvan->id . '-' . Str::of($congvan->tieu_de)->slug('-');
		$congvan->slug = $newSlug;
		$congvan->save();

		return redirect()->route('dashboard')->with('success', 'Cập nhật công văn thành công.');
	}
	// Xóa công văn
	public function xoaCongVan($id)
	{
		$congvan = Congvan::findOrFail($id); // Tìm công văn theo ID
		// Xoá file 
		Storage::delete($congvan->file);
		// Xóa công văn
		if ($congvan->delete()) {
			return redirect()->route('dashboard')->with('success', 'Xóa công văn thành công.');
		}
		return redirect()->route('dashboard')->with('error', 'Xóa công văn không thành công.');
	}
}
