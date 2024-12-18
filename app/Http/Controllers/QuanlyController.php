<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Response;
use Inertia\Inertia;
use Illuminate\Http\Request;
class QuanlyController extends Controller
{
	// Khai báo
	protected $CongvanController;
	protected $NhanSuController;
	public function __construct(CongvanController $CongvanController, NhanSuController $NhanSuController)
	{
		$this->CongvanController = $CongvanController;
		$this->NhanSuController = $NhanSuController;
	}

	// Quản lý nhân sự
	public function nhanSu(): Response
	{
		$nhanSu = $this->NhanSuController->layTatCaNhanSu();
		$nhanSuChuaKichHoat = $this->NhanSuController->layNhanSuChuaKichHoat();
		return Inertia::render('NhanSu', ['nhanSu' => ['tatCa' => $nhanSu, 'chuaKichHoat' => $nhanSuChuaKichHoat]]);
	}

	public function kichHoat($id)
	{
		$user = User::find($id);
		if ($user) {
			$user->update(['actived' => 'true']);
			return redirect()->route('dashboard')->with('success', 'Kích hoạt thành công.');
		}
		return redirect()->route('dashboard')->with('error', 'Kích hoạt thất bại.');
	}
}
