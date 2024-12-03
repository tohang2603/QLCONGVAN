<?php

use App\Http\Controllers\CongVanController;
use App\Http\Controllers\LoaiCongVanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuanlyController;
use Illuminate\Foundation\Application;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
// 	return Inertia::render('Welcome', [
// 		'canLogin' => Route::has('login'),
// 		'canRegister' => Route::has('register'),
// 		'laravelVersion' => Application::VERSION,
// 		'phpVersion' => PHP_VERSION,
// 	]);
// });

// Home
Route::get('/', function () {
	return redirect()->route('login');
});

//duong dan
Route::middleware(['auth'])->group(function () {
    // Trang chủ
    Route::get('/trang-chu', [QuanlyController::class, 'trangChu'])->name('trang-chu');

    // Thêm công văn
    Route::get('/them-cong-van', [CongVanController::class, 'themCongVan'])->name('them-cong-van');
});
Route::get('/dashboard', function () {
	return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
	Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
