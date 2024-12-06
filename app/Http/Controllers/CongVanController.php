<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Congvan;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use Illuminate\Support\Str;

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
			'socongvan' =>['required','string'],
			'tieude' =>['required', 'string', 'max: 255'],
			'mota' =>['required', 'string', 'max: 255'],	
			// 'file' =>['required'],
		],[
			'socongvan.required' => 'Không được bỏ trống dòng này.',
			'socongvan.string' => 'Số công văn phải là một chuỗi.'
		]);

		//thao tac CSDL tao congvan
		$congvan = Congvan::create([
			'so_cong_van' => $request->socongvan,
			'tieu_de' => $request->tieude,
			'mo_ta' => $request->mota, 
			'nguoi_tao' => auth()->user()->id,
			'file' => 'string', 
			// 'file' => $request->file('file'),
		]);

		$newSlug = $congvan->id . '-'. Str::of($congvan->tieu_de)->slug('-');
		// dd($newSlug);
		$congvan->slug = $newSlug;
		$congvan->save();

		return redirect()->route('dashboard')->with('success','Thêm công văn thành công.');
	}

	// Hiện dữ liệu công văn
	public function layTatCaCongVan()
	{
		$congvan = Congvan::all();
		return $congvan;
	}

	// Sửa công văn
	public function suaCongVan($id, Request $request)
{
    $congvan = Congvan::findOrFail($id); // Tìm công văn theo ID

    // Validate dữ liệu
    $request->validate([
        'socongvan' => ['required', 'string'],
        'tieude' => ['required', 'string', 'max: 255'],
        'mota' => ['required', 'string', 'max: 255'],
    ]);

    // Cập nhật công văn
    $congvan->update([
        'so_cong_van' => $request->socongvan,
        'tieu_de' => $request->tieude,
        'mo_ta' => $request->mota,
        'nguoi_tao' => auth()->user()->id,
        // 'file' => $request->file('file'), // Nếu có file thì xử lý thêm
	],[
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

    // Xóa công văn
    $congvan->delete();

    return redirect()->route('dashboard')->with('success', 'Xóa công văn thành công.');
}


    // Tìm công văn
    public function timCongVan(Request $request)
    {
        // Lấy các tham số tìm kiếm từ request (nếu có)
        $query = CongVan::query();

        // Tìm theo tên công văn
        if ($request->has('ten_cong_van') && !empty($request->ten_cong_van)) {
            $query->where('ten_cong_van', 'like', '%' . $request->ten_cong_van . '%');
        }

        // Tìm theo số công văn
        if ($request->has('so_cong_van') && !empty($request->so_cong_van)) {
            $query->where('so_cong_van', 'like', '%' . $request->so_cong_van . '%');
        }

        // Tìm theo ngày tháng
        if ($request->has('ngay_ban_hanh') && !empty($request->ngay_ban_hanh)) {
            $query->whereDate('ngay_ban_hanh', '=', $request->ngay_ban_hanh);
        }

        // Lấy kết quả tìm kiếm
        $congvans = $query->get();

        // Trả về kết quả tìm kiếm (hoặc có thể trả về view)
        return view('congvan.tim', compact('congvans'));
    }
}
