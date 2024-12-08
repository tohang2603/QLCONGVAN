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
	public function trangChu(): Response
	{
		$dsCongVan = $this->CongvanController->layTatCaCongVan();
		return Inertia::render('TrangChu', [
			'dscongvan' => $dsCongVan,
		]);
	}
	//
}
