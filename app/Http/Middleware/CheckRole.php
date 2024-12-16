<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
	public function handle(Request $request, Closure $next): Response
	{
		$user = auth()->user();
		if ($user && $user->phanQuyen->ten_ghi_tat === "admin") {
			Inertia::share('role', fn() => $user->phanQuyen->ten_ghi_tat === "admin" ? '0x3782' : 'null');
			return $next($request);
		} else {
			return $next($request);
		}
	}
}
