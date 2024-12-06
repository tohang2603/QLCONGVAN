<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use User;
class NguoiDungController extends Controller
{
    public function taoNguoiDung(Request $request)
    {
        return Inertia::render('ThemNguoiDung', [
            'status' => session('status'),
        ]);
    }
    //

    // Thêm người dùng
    public function themNguoiDung(Request $request)
    {
        // Validate dữ liệu
        $request->validate([
            'name' => ['required', 'string', 'max: 255'],
            'email' => ['required', 'string', 'email', 'max: 255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'id_ma_quyen' => ['required', 'exists:phanquyen,id'],
        ], [
            'name.required' => 'Tên người dùng không được bỏ trống.',
            'email.required' => 'Email không được bỏ trống.',
            'email.email' => 'Email phải hợp lệ.',
            'password.required' => 'Mật khẩu không được bỏ trống.',
        ]);

        // Thêm người dùng vào cơ sở dữ liệu
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'id_ma_quyen' => $request->id_ma_quyen,
        ]);

        return redirect()->route('dashboard')->with('success', 'Thêm người dùng thành công.');
    }
    public function layTatCaNguoiDung()
{
    $user = User::all(); // Lấy tất cả các bản ghi trong bảng coquan
    return $user;
}
    // Hiển thị form sửa người dùng
    public function suaNguoiDung($id)
{
    $user = User::findOrFail($id);  // Tìm người dùng theo ID
    return Inertia::render('SuaNguoiDung', [
        'user' => $user,  // Truyền thông tin người dùng vào view
    ]);
}
    // Cập nhật thông tin người dùng
    public function capNhatNguoiDung(Request $request, $id)
{
    // Validate dữ liệu
    $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,' . $id],
        'password' => ['nullable', 'string', 'min:8', 'confirmed'],
        'id_ma_quyen' => ['required', 'exists:phanquyen,id'],
    ], [
        'name.required' => 'Tên người dùng không được bỏ trống.',
        'email.required' => 'Email không được bỏ trống.',
        'email.email' => 'Email phải hợp lệ.',
        'password.required' => 'Mật khẩu không được bỏ trống.',
    ]);

    // Tìm người dùng theo ID và cập nhật thông tin
    $user = User::findOrFail($id);

    $user->update([
        'name' => $request->name,
        'email' => $request->email,
        'id_ma_quyen' => $request->id_ma_quyen,
        'password' => $request->password ? bcrypt($request->password) : $user->password, // Giữ mật khẩu cũ nếu không thay đổi
    ]);

    return redirect()->route('dashboard')->with('success', 'Cập nhật người dùng thành công.');
}
    // Xóa người dùng
    public function xoaNguoiDung($id)
{
    $user = User::findOrFail($id);  // Tìm người dùng theo ID
    $user->delete();  // Xóa người dùng

    return redirect()->route('dashboard')->with('success', 'Xóa người dùng thành công.');
}

}