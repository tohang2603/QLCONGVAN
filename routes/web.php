<?php

use App\Http\Controllers\CongVanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuanlyController;
use App\Http\Controllers\PhongBanController;
use App\Http\Controllers\NguoiDungController;
use App\Http\Controllers\CoQuanController;
use App\Http\Controllers\PhanQuyenController;
use App\Http\Controllers\QuanLyCQController;
use App\Models\Congvan;
use App\Models\Coquan;
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
	// Xem công văn

	Route::get('/xem-cv/{path}', function ($path) {
		return redirect('storage/' . $path);
	})->name('xem-cv');
	// 
	// Thêm công văn
	Route::post('/tao-cong-van', [CongVanController::class, 'taoCongVan'])->name('tao-cong-van');
	Route::get('/them-cong-van', [CongVanController::class, 'themCongVan'])->name('them-cong-van');
	Route::get('/sua-cong-van/{id}', [CongVanController::class, 'suaCongVan'])->name('sua-cong-van');
	Route::post('/cap-nhat-cong-van/{id}', [CongVanController::class, 'capNhatCongVan'])->name('cap-nhat-cong-van'); // Để cập nhật
	Route::delete('/xoa-cong-van/{id}', [CongVanController::class, 'xoaCongVan'])->name('xoa-cong-van');
	//thêm phòng ban
	Route::post('/tao-phong-ban', [PhongBanController::class, 'taoPhongBan'])->name('tao-phong-ban');
	Route::get('them-phong-ban', [PhongBanController::class, 'themPhongBan'])->name('them-phong-ban');
	Route::post('sua-phong-ban/{id}', [PhongBanController::class, 'suaPhongBan'])->name('sua-phong-ban');
	Route::patch('/cap-nhat-phong-ban/{id}', [PhongBanController::class, 'capNhatPhongBan'])->name('cap-nhat-phong-ban');
	Route::delete('/xoa-phong-ban/{id}', [PhongBanController::class, 'xoaPhongBan'])->name('xoa-phong-ban');

});
//thêm cơ quan
Route::get('/them-co-quan', [CoQuanController::class, 'create'])->name('them-co-quan');
Route::post('/tao-co-quan', [CoQuanController::class, 'taoCoQuan'])->name('tao-co-quan');
Route::get('/them-co-quan', [CoQuanController::class, 'themCoQuan'])->name('them-co-quan');
Route::post('/sua-co-quan/{id}', [CoQuanController::class, 'suaCoQuan'])->name('sua-co-quan');
Route::patch('/cap-nhat-co-quan/{id}', [CoQuanController::class, 'capNhatCoQuan'])->name('cap-nhat-co-quan');
Route::delete('/xoa-co-quan/{id}', [CoQuanController::class, 'xoaCoQuan'])->name('xoa-co-quan');

//thêm người dùng
Route::post('/tao-nguoi-dung', [NguoiDungController::class, 'taoNguoiDung'])->name('tao-nguoi-dung');
Route::get('/them-nguoi-dung', [NguoiDungController::class, 'themNguoiDung'])->name('them-nguoi-dung');
Route::post('/sua-nguoi-dung/{id}', [NguoiDungController::class, 'suaNguoiDung'])->name('sua-nguoi-dung');
Route::patch('/cap-nhat-nguoi-dung/{id}', [NguoiDungController::class, 'capNhatNguoiDung'])->name('cap-nhat-nguoi-dung');
Route::delete('/xoa-nguoi-dung/{id}', [NguoiDungController::class, 'xoaNguoiDung'])->name('xoa-nguoi-dung');


Route::get('/dashboard', function () {
	// $dsCongVan = Congvan::with('nguoidung')->get();
	$dsCongVan = Congvan::with('nguoidung')->orderBy('created_at', 'desc')->get();
	return Inertia::render('Dashboard', ['dscongvan' => $dsCongVan,]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/coquan', function () {
    $dsCoQuan = CoQuan::all(); // Retrieve all records from the CoQuan model
    return Inertia::render('coquan', ['dscoquan' => $dsCoQuan]);
})->middleware(['auth', 'verified'])->name('coquan');

Route::get('/coquan', 'CoQuanController@index');
Route::get('/coquan', [CoQuanController::class, 'index'])->middleware(['auth', 'verified'])->name('coquan');


Route::middleware('auth')->group(function () {
	Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

	Route::get('them-phan-quyen', [PhanQuyenController::class, 'themPhanQuyen'])->name('them-phan-quyen');
	Route::post('tao-phan-quyen', [PhanQuyenController::class, 'taoPhanQuyen'])->name('tao-phan-quyen');
	Route::get('/sua-phan-quyen/{id}', [PhanQuyenController::class, 'suaPhanQuyen'])->name('sua-phan-quyen');
	Route::put('/cap-nhat-phan-quyen/{id}', [PhanQuyenController::class, 'capNhatPhanQuyen'])->name('cap-nhat-phan-quyen');
	Route::delete('/xoa-phan-quyen/{id}', [PhanQuyenController::class, 'xoaPhanQuyen'])->name('xoa-phan-quyen');
});

require __DIR__ . '/auth.php';
