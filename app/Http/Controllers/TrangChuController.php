<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia; 

class TrangChuController extends Controller
{
    public function giaoDienTrangChu()
    {
        return Inertia::render('TrangChu', [// Truyền dữ liệu cho component
        ]);
    }
}
