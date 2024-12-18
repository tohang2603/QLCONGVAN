<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia; // Thêm import cho Inertia

class TrangChuController extends Controller
{
    public function giaoDienTrangChu()
    {
        // Render trang chủ bằng component React qua Inertia
        return Inertia::render('TrangChu'); // 'TrangChu' là tên component React của bạn
    }
}
