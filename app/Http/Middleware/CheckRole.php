<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
	public function handle(Request $request, Closure $next): Response
	{
		$user = auth()->user();
		if ($user && $user->phanQuyen->ten_ghi_tat === "admin") {
			$response = $next($request);
			$response->setContent($response->getContent() . 'X_00034');
			return $response;
		} else {
			return $next($request);
		}
	}
}
