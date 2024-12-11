<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Admin
{
	public function handle(Request $request, Closure $next): Response
	{
		// Lấy thông tin user đang đăng nhập
		$user = auth()->user();
		// Log thông tin user đang đăng nhập
		if ($user && $user->phanQuyen->ten_ghi_tat === "admin") {
			return $next($request);
		} else {
			return redirect()->route('none-role');
		}
	}
}
