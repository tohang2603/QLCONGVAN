<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
	/**
	 * Display the registration view.
	 */
	public function create(): Response
	{
		return Inertia::render('Auth/Register');
	}

	/**
	 * Handle an incoming registration request.
	 *
	 * @throws \Illuminate\Validation\ValidationException
	 */
	public function store(Request $request): RedirectResponse
	{
		$request->validate(
			[
				'name' => 'required|string|max:255',
				'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
				'address' => 'required|string|max:255',
				'phone' => 'required|string|size:10',
				'password' => ['required', 'confirmed', Rules\Password::defaults()],
			],
			[
				'address.required' => ' Địa chỉ không được để trống.',
				'phone.required' => 'Số điện thoại không được để trống.',
				'phone.size' => 'Số điện thoại phải có 10 ký tự.',
			]
		);

		$user = User::create([
			'name' => $request->name,
			'email' => $request->email,
			'address' => $request->address,
			'phone' => $request->phone,
			'password' => Hash::make($request->password),
		]);

		event(new Registered($user));

		Auth::login($user);

		return redirect(route('dashboard', absolute: false));
	}
}
