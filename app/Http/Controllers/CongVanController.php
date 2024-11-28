<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class CongVanController extends Controller
{

	// Thêm công văn
	public function themCongVan(Request $request): Response
	{
		return Inertia::render('ThemCongVan', [
			'status' => session('status'),
		]);
	}
}
