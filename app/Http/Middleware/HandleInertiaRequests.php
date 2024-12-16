<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
	/**
	 * The root template that is loaded on the first page visit.
	 *
	 * @var string
	 */
	protected $rootView = 'app';

	public function version(Request $request): ?string
	{
		return parent::version($request);
	}

	public function share(Request $request): array
	{
		return [
			...parent::share($request),
			'auth' => [
				'user' => $request->user(),
			],
			'ziggy' => fn() => [
				...(new Ziggy)->toArray(),
				'location' => $request->url(),
			],
			'flash' => [
				'success' => fn() => $request->session()->get('success'),
				'error' => fn() => $request->session()->get('error'),
				'message' => fn() => $request->session()->get('message')
			],
		];
	}
}
