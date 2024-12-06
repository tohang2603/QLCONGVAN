<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Coquan;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class CoQuanController extends Controller
{
    public function themCoQuan(Request $request): Response
    {
    return Inertia::render('ThemCoQuan', [
        'status' => session('status'),
    ]);
    }
    public function taoCoQuan(Request $request)
{
    $request->validate([
        'ten_co_quan' => ['required', 'string', 'max:255'],
        'dia_chi' => ['required', 'string', 'max:255'],
        'so_dt' => ['required', 'string', 'max:10'], // Độ dài số điện thoại
    ], [
        'ten_co_quan.required' => 'Tên cơ quan không được để trống.',
        'ten_co_quan.string' => 'Tên cơ quan phải là một chuỗi.',
        'dia_chi.required' => 'Địa chỉ không được để trống.',
        'so_dt.required' => 'Số điện thoại không được để trống.',
        'so_dt.max' => 'Số điện thoại không được vượt quá 10 ký tự.',
    ]);

    // Tạo cơ quan trong CSDL
    $coquan = Coquan::create([
        'ten_co_quan' => $request->ten_co_quan,
        'dia_chi' => $request->dia_chi,
        'so_dt' => $request->so_dt,
    ]);

    return redirect()->route('dashboard')->with('success', 'Thêm cơ quan thành công.');
}
    public function layTatCaCoQuan()
{
    $coquan = CoQuan::all(); // Lấy tất cả các bản ghi trong bảng coquan
    return $coquan;
}
    

    //Sửa cơ quan
    public function suaCoQuan($id)
{
    $coquan = CoQuan::findOrFail($id);  // Tìm cơ quan theo ID
    return Inertia::render('SuaCoQuan', [
        'coquan' => $coquan,  // Truyền thông tin cơ quan vào view
    ]);
}
    // Cập nhật thông tin cơ quan
public function capNhatCoQuan(Request $request, $id)
{
    $request->validate([
        'ten_co_quan' => ['required', 'string', 'max:255'],
        'dia_chi' => ['required', 'string', 'max:255'],
        'so_dt' => ['required', 'string', 'max:10'],
    ], [
        'ten_co_quan.required' => 'Tên cơ quan không được để trống.',
        'ten_co_quan.string' => 'Tên cơ quan phải là một chuỗi.',
        'dia_chi.required' => 'Địa chỉ không được để trống.',
        'so_dt.required' => 'Số điện thoại không được để trống.',
        'so_dt.max' => 'Số điện thoại không được vượt quá 10 ký tự.',
    ]);

    // Tìm cơ quan theo ID và cập nhật thông tin
    $coquan = CoQuan::findOrFail($id);
    $coquan->update([
        'ten_co_quan' => $request->ten_co_quan,
        'dia_chi' => $request->dia_chi,
        'so_dt' => $request->so_dt,
    ]);

    return redirect()->route('dashboard')->with('success', 'Cập nhật cơ quan thành công.');
}
    // Xóa cơ quan
    public function xoaCoQuan($id)
{
    $coquan = CoQuan::findOrFail($id);  // Tìm cơ quan theo ID
    $coquan->delete();  // Xóa cơ quan

    return redirect()->route('dashboard')->with('success', 'Xóa cơ quan thành công.');
}

}
