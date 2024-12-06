<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Phongban;
// use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use Illuminate\Support\Str;

class PhongBanController extends Controller
{
    public function themPhongBan(Request $request): Response
	{
		return Inertia::render('ThemPhongBan', [
			'status' => session('status'),
		]);
	}
    public function taoPhongBan(Request $request)
    {
    $request->validate([
        'tenphongban' => ['required', 'string', 'max:255'],
        'mota' => ['required', 'string', 'max:255'],
        'nguoiquanly' => ['required', 'string', 'max:255'],
        'diachi' => ['required', 'string', 'max:255'],
        'sodienthoai' => ['required', 'string', 'max:10'], // Số điện thoại tối đa 10 ký tự
    ], [
        'tenphongban.required' => 'Không được bỏ trống tên phòng ban.',
        'mota.required' => 'Không được bỏ trống mô tả.',
        'nguoiquanly.required' => 'Không được bỏ trống người quản lý.',
        'diachi.required' => 'Không được bỏ trống địa chỉ.',
        'sodienthoai.required' => 'Không được bỏ trống số điện thoại.',
    ]);

    // Tạo mới phòng ban trong cơ sở dữ liệu
    $phongban = PhongBan::create([
        'ten_phong_ban' => $request->tenphongban,
        'mo_ta' => $request->mota,
        'nguoi_quan_ly' => $request->nguoiquanly,
        'dia_chi' => $request->diachi,
        'so_dien_thoai' => $request->sodienthoai,
    ]);

    return redirect()->route('dashboard')->with('success', 'Thêm phòng ban thành công.');
    }
    public function layTatCaPhongBan()
    {
    $phongban = PhongBan::all();
    return $phongban;
    }

    public function suaPhongBan($id)
{
    $user = Phongban::findOrFail($id);  // Tìm người dùng theo ID
    return Inertia::render('SuaNguoiDung', [
        'user' => $user,  // Truyền thông tin người dùng vào view
    ]);
}
    // Phương thức sửa phòng ban
    public function capNhatPhongBan(Request $request, $id)
{
    // Tìm phòng ban theo ID
    $phongban = PhongBan::findOrFail($id);

    // Xác thực dữ liệu
    $request->validate([
        'tenphongban' => ['required', 'string', 'max:255'],
        'mota' => ['required', 'string', 'max:255'],
        'nguoiquanly' => ['required', 'string', 'max:255'],
        'diachi' => ['required', 'string', 'max:255'],
        'sodienthoai' => ['required', 'string', 'max:10'], // Số điện thoại tối đa 10 ký tự
    ], [
        'tenphongban.required' => 'Không được bỏ trống tên phòng ban.',
        'mota.required' => 'Không được bỏ trống mô tả.',
        'nguoiquanly.required' => 'Không được bỏ trống người quản lý.',
        'diachi.required' => 'Không được bỏ trống địa chỉ.',
        'sodienthoai.required' => 'Không được bỏ trống số điện thoại.',
    ]);

    // Cập nhật thông tin phòng ban
    $phongban->update([
        'ten_phong_ban' => $request->tenphongban,
        'mo_ta' => $request->mota,
        'nguoi_quan_ly' => $request->nguoiquanly,
        'dia_chi' => $request->diachi,
        'so_dien_thoai' => $request->sodienthoai,
    ]);

    // Chuyển hướng về trang danh sách với thông báo thành công
    return redirect()->route('dashboard')->with('success', 'Cập nhật phòng ban thành công.');
}
    // Phương thức xóa phòng ban
    public function xoaPhongBan($id)
{
    // Tìm phòng ban theo ID
    $phongban = PhongBan::findOrFail($id);

    // Xóa phòng ban
    $phongban->delete();

    // Chuyển hướng về trang danh sách với thông báo thành công
    return redirect()->route('dashboard')->with('success', 'Xóa phòng ban thành công.');
}

    
}
