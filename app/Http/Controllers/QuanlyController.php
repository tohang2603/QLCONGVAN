<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
class QuanlyController extends Controller
{
    public function trangChu(Request $request): Response
	{
		return Inertia::render('TrangChu', [
			'status' => session('status'),
		]);
	}
    //
}
