<?php

use App\Http\Controllers\CongVanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuanlyController;
use App\Models\Congvan;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Home
Route::get('/', function () {
	return redirect()->route('login');
});

//duong dan
Route::middleware(['auth'])->group(function () {
	// Trang chủ
	Route::get('/trang-chu', [QuanlyController::class, 'trangChu'])->name('trang-chu');

	// Thêm công văn
	Route::post('/tao-cong-van',[CongVanController::class,'taoCongVan'])->name('tao-cong-van');
	Route::get('/them-cong-van', [CongVanController::class, 'themCongVan'])->name('them-cong-van');
});
Route::get('/dashboard', function () {
	$dsCongVan = Congvan::with('nguoidung')->get();
	return Inertia::render('Dashboard', ['dscongvan' =>  $dsCongVan,]);
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
	Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
