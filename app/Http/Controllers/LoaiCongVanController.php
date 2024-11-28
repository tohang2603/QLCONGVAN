<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class LoaiCongVanController extends Controller
{
	//	
	// Loại công văn
	public function loaiCongVan(Request $request)
	{
		return Inertia::render('LoaiCongVan', [
			'status' => session('status'),
		]);
	}
}
