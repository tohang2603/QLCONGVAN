<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use User;
class NguoiDungController extends Controller
{
    public function themNguoiDung(Request $request)
    {
        return Inertia::render('ThemNguoiDung', [
        ]);
    }
    //

    // Thêm người dùng
    public function taoNguoiDung(Request $request)
    {
        // Validate dữ liệu
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'address' => ['required', 'string','address, max:255'],
            'phone' => ['required', 'string','phone, size:10'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'id_ma_quyen' => ['required', 'exists:phanquyen,id'],
        ], [
            'name.required' => 'Tên người dùng không được bỏ trống.',
            'email.required' => 'Email không được bỏ trống.',
            'email.email' => 'Email phải hợp lệ.',
            'address.required' => 'Địa chỉ không được bỏ trống.',
            'phone.size' => 'Không được bỏ trống số điện thoại.',
            'password.required' => 'Mật khẩu không được bỏ trống.',
        ]);

        // Thêm người dùng vào cơ sở dữ liệu
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address,
            'phone'=> $request->phone,
            'password' => bcrypt($request->password),
            'id_ma_quyen' => $request->id_ma_quyen,
        ]);

        return redirect()->route('nhansu')->with('success', 'Thêm người dùng thành công.');
    }
    public function layTatCaNguoiDung()
{
    $user = User::all(); // Lấy tất cả các bản ghi trong bảng coquan
    return $user;
}
    // Hiển thị form sửa người dùng
    public function suaNguoiDung($id)
{
    return Inertia::render('SuaNguoiDung', [
        'user' => $this->LayThongTinNguoiDung($id),
    ]);
}
    public function layThongTinNguoiDung($id)
    {   
        $user = User::find($id);
        return $user;
    }
    // Cập nhật thông tin người dùng
    public function capNhatNguoiDung(Request $request, $id)
{
    // Validate dữ liệu
    $request->validate([
        'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'address' => ['required', 'string','address, max:255'],
            'phone' => ['required', 'string','phone, size:10'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'id_ma_quyen' => ['required', 'exists:phanquyen,id'],
        ], [
            'name.required' => 'Tên người dùng không được bỏ trống.',
            'email.required' => 'Email không được bỏ trống.',
            'email.email' => 'Email phải hợp lệ.',
            'address.required' => 'Địa chỉ không được bỏ trống.',
            'phone.size' => 'Không được bỏ trống số điện thoại.',
            'password.required' => 'Mật khẩu không được bỏ trống.',
        ]);

    // Tìm người dùng theo ID và cập nhật thông tin
    $user = User::findOrFail($id);
    $user->update([
        'name' => $request->name,
        'email' => $request->email,
        'address'=> $request->address,
        'phone'=> $request->phone,
        'id_ma_quyen' => $request->id_ma_quyen,
        'password' => $request->password ? bcrypt($request->password) : $user->password, // Giữ mật khẩu cũ nếu không thay đổi
    ]);

    return redirect()->route('nhansu')->with('success', 'Cập nhật người dùng thành công.');
}
    // Xóa người dùng
    public function xoaNguoiDung($id)
{
    $user = User::findOrFail($id);  // Tìm người dùng theo ID
    $user->delete();  // Xóa người dùng

    return redirect()->route('nhansu')->with('success', 'Xóa người dùng thành công.');
}

}