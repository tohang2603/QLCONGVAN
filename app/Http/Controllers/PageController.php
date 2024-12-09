<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
	protected $CongvanController;
	public function __construct(CongvanController $CongvanController)
	{
		$this->CongvanController = $CongvanController;
	}
	// Dashboard
	public function dashBoard()
	{
		$dsCongVan = $this->CongvanController->layTatCaCongVan();
		return Inertia::render('Dashboard', ['dscongvan' => $dsCongVan,]);
	}
}
