<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Actived
{

	public function handle(Request $request, Closure $next): Response
	{
		// Lấy thông tin user đang đăng nhập
		$user = auth()->user();
		// Log thông tin user đang đăng nhập
		// dd($user->role->short_role);
		if ($user && $user->actived === "true") {
			return $next($request);
		} else {
			return redirect("/actived");
		}
	}
}
