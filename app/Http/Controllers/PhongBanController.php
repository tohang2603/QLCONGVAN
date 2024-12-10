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
		]);
	}

    public function giaoDienPhongBan(): Response
	{
		$dsphongban = $this->layTatCaPhongBan(); //gan ds phong quan
		return Inertia::render('PhongBan', ['dsphongban'=>$dsphongban]);
    }
    public function taoPhongBan(Request $request)
    {
    $request->validate([
        'ten_phong_ban' => ['required', 'string', 'max:255'],
        'mo_ta' => ['required', 'string', 'max:255'],
        'nguoi_quan_ly' => ['required', 'string', 'max:255'],
        'dia_chi' => ['required', 'string', 'max:255'],
        'so_dt' => ['required', 'string', 'size:10'], // Số điện thoại tối đa 10 ký tự
    ], [
        'ten_phong_ban.required' => 'Không được bỏ trống tên phòng ban.',
        'mo_ta.required' => 'Không được bỏ trống mô tả.',
        'nguoi_quan_ly.required' => 'Không được bỏ trống người quản lý.',
        'dia_chi.required' => 'Không được bỏ trống địa chỉ.',
        'so_dt.size' => 'Không được bỏ trống số điện thoại.',
    ]);

    // Tạo mới phòng ban trong cơ sở dữ liệu
    $phongban = PhongBan::create([
        'ten_phong_ban' => $request->ten_phong_ban,
        'mo_ta' => $request->mo_ta,
        'nguoi_quan_ly' => $request->nguoi_quan_ly,
        'dia_chi' => $request->diachi,
        'so_dt' => $request->so_dt,
    ]);

    return redirect()->route('phongban')->with('success', 'Thêm phòng ban thành công.');
    }
    public function layTatCaPhongBan()
    {
        $phongban = PhongBan::all();
        return $phongban;
    }

    public function suaPhongBan($id)
{
    return Inertia::render('SuaPhongBan', [
        'phongban' => $this->LayThongTinPhongBan($id),
    ]);
}

    
	public function LayThongTinPhongBan($id)
	{
		$phongban = Phongban::find($id);
		return $phongban;
	}// Phương thức sửa phòng ban
    public function capNhatPhongBan(Request $request, $id)
{
    dd($request->all());
    // Xác thực dữ liệu
    $request->validate([
        'ten_phong_ban' => ['required', 'string', 'max:255'],
        'mo_ta' => ['required', 'string', 'max:255'],
        'nguoi_quan_ly' => ['required', 'string', 'max:255'],
        'dia_chi' => ['required', 'string', 'max:255'],
        'so_dt' => ['required', 'string', 'max:10'], // Số điện thoại tối đa 10 ký tự
    ], [
        'ten_phong_ban.required' => 'Không được bỏ trống tên phòng ban.',
        'mo_ta.required' => 'Không được bỏ trống mô tả.',
        'nguoi_quan_ly.required' => 'Không được bỏ trống người quản lý.',
        'dia_chi.required' => 'Không được bỏ trống địa chỉ.',
        'so_dt.required' => 'Không được bỏ trống số điện thoại.',
    ]);

    // Cập nhật thông tin phòng ban
    $phongban = Phongban::findOrFail($id);
    $phongban->update([
        'ten_phong_ban' => $request->ten_phong_ban,
        'mo_ta' => $request->mo_ta,
        'nguoi_quan_ly' => $request->nguoi_quan_ly,
        'dia_chi' => $request->dia_chi,
        'so_dt' => $request->so_dt,
    ]);

    // Chuyển hướng về trang danh sách với thông báo thành công
    return redirect()->route('phongban')->with('success', 'Cập nhật phòng ban thành công.');
}
    // Phương thức xóa phòng ban
    public function xoaPhongBan($id)
{
    // Tìm phòng ban theo ID
    $phongban = PhongBan::findOrFail($id);
    $phongban->delete();

    // Chuyển hướng về trang danh sách với thông báo thành công
    return redirect()->route('phongban')->with('success', 'Xóa phòng ban thành công.');
}

}
