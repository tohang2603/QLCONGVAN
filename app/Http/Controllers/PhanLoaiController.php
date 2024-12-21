<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Congvan;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Storage;

class PhanLoaiController extends Controller
{
    public function danhSachCongVanTheoTrangThai(Request $request)
	{
    $trangThai = $request->input('trangthai');
    $dsCongVan = Congvan::whereHas('cvdenvadi', function ($query) use ($trangThai) {
        $query->where('trang_thai', $trangThai);
    })->get();

    return Inertia::render('DanhSachCongVan', ['congvan' => $dsCongVan]);
	}
    public function danhSachCongVanTheoCoQuan(Request $request)
{
    $idCoQuan = $request->input('id_co_quan');
    $dsCongVan = Congvan::whereHas('cvdenvadi', function ($query) use ($idCoQuan) {
        $query->where('id_co_quan', $idCoQuan);
    })->get();

    return Inertia::render('DanhSachCongVan', ['congvan' => $dsCongVan]);
}
    
}
