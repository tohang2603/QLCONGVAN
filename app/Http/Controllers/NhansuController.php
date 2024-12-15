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
        $nhanSu = User::select(['name', 'address', 'phone', 'id_ma_quyen'])->get();  // Lấy tất cả nhân sự
        $nhanSu->load('phanQuyen');
        return $nhanSu;
    }
}
