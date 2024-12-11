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
	public function __construct(CongvanController $CongvanController)
	{
		$this->CongvanController = $CongvanController;
	}

	// Quản lý nhân sự
	public function nhanSu(): Response
	{
		return Inertia::render('NhanSu');
	}
}
