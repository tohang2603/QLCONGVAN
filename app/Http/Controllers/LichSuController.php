<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\LichSu;
use Illuminate\Http\Request;

class LichSuController extends Controller
{
	public function ThemLichSu($user, $congvan, $trangthai)
	{
		$ls = LichSu::create([
			'id_cong_van' => $congvan,
			'id_nguoi_thao_tac' => $user,
			'trang_thai' => $trangthai,
		]);
	}

	// Xoá lịch sử
	public function XoaLichSu($id)
	{
		$ls = LichSu::find($id);
		$ls->delete();
	}
}
