<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class NhansuController extends Controller
{
    // Lấy tất cả nhân sự
    public function layTatCaNhanSu()
    {
        $nhanSu = User::select(['id', 'name', 'email', 'address', 'phone', 'id_ma_quyen'])->where('actived', 'true')->get();  // Lấy tất cả nhân sự
        $nhanSu->load('phanQuyen');
        return $nhanSu;
    }

    // Lấy nhân sự theo chưa kích hoạt
    public function layNhanSuChuaKichHoat()
    {
        $nhanSu = User::select(['id', 'name', 'email', 'address', 'phone', 'id_ma_quyen'])->where('actived', 'false')->get();  // Lấy nhân sự chưa kích hoạt
        $nhanSu->load('phanQuyen');
        return $nhanSu;
    }
}
