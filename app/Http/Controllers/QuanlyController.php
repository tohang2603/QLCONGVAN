<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
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
		return Inertia::render('NhanSu', ['nhanSu' => $nhanSu]);
	}
}
