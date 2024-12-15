<?php
use App\Http\Controllers\TimKiemController;
use App\Http\Controllers\CongVanController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuanlyController;
use App\Http\Controllers\PhongBanController;
use App\Http\Controllers\CoQuanController;
use App\Http\Controllers\PhanQuyenController;
use Illuminate\Support\Facades\Route;

// Home
Route::get('/', function () {
	return redirect()->route('login');
});

//duong dan
Route::middleware(['auth', 'actived', 'checkrole'])->group(function () {
	// Tìm kiếm
	Route::get('/tim-kiem', [TimKiemController::class, 'giaoDienTimKiem'])->name('tim-kiem');
	Route::get('/tim-kiem-cong-van', [TimKiemController::class, 'timKiemCongVan'])->name('tim-kiem-cong-van');

	// Thêm công văn
	Route::post('/tao-cong-van', [CongVanController::class, 'taoCongVan'])->name('tao-cong-van');
	Route::get('/them-cong-van', [CongVanController::class, 'themCongVan'])->name('them-cong-van');
	Route::get('/sua-cong-van/{id}', [CongVanController::class, 'suaCongVan'])->name('sua-cong-van');
	Route::post('/cap-nhat-cong-van/{id}', [CongVanController::class, 'capNhatCongVan'])->name('cap-nhat-cong-van'); // Để cập nhật
	Route::delete('/xoa-cong-van/{id}', [CongVanController::class, 'xoaCongVan'])->middleware(['admin'])->name('xoa-cong-van');

	//thêm phòng ban
	Route::get('/phongban', [PhongBanController::class, 'giaoDienPhongBan'])->name('phongban');
	Route::get('/them-phong-quan', [PhongBanController::class, 'themPhongBan'])->name('them-phong-ban');
	Route::post('/tao-phong-ban', [PhongBanController::class, 'taoPhongBan'])->name('tao-phong-ban');
	Route::get('/sua-phong-ban/{id}', [PhongBanController::class, 'suaPhongBan'])->name('sua-phong-ban');
	Route::patch('/cap-nhat-phong-ban/{id}', [PhongBanController::class, 'capNhatPhongBan'])->name('cap-nhat-phong-ban');
	Route::delete('/xoa-phong-ban/{id}', [PhongBanController::class, 'xoaPhongBan'])->name('xoa-phong-ban');

	//thêm cơ quan
	Route::get('/coquan', [CoQuanController::class, 'giaoDienCoQuan'])->name('coquan');
	Route::get('/them-co-quan', [CoQuanController::class, 'themCoQuan'])->name('them-co-quan');
	Route::post('/tao-co-quan', [CoQuanController::class, 'taoCoQuan'])->name('tao-co-quan');
	Route::get('/sua-co-quan/{id}', [CoQuanController::class, 'suaCoQuan'])->name('sua-co-quan');
	Route::patch('/cap-nhat-co-quan/{id}', [CoQuanController::class, 'capNhatCoQuan'])->name('cap-nhat-co-quan');
	Route::delete('/xoa-co-quan/{id}', [CoQuanController::class, 'xoaCoQuan'])->name('xoa-co-quan');

	//them phan quyen
	Route::get('/phanquyen', [PhanQuyenController::class, 'giaoDienPhanQuyen'])->middleware(['admin'])->name('phanquyen');
	Route::get('/them-phan-quyen', [PhanQuyenController::class, 'themPhanQuyen'])->name('them-phan-quyen');
	Route::post('/tao-phan-quyen', [PhanQuyenController::class, 'taoPhanQuyen'])->name('tao-phan-quyen');
	Route::get('/sua-phan-quyen/{id}', [PhanQuyenController::class, 'suaPhanQuyen'])->name('sua-phan-quyen');
	Route::patch('/cap-nhat-phan-quyen/{id}', [PhanQuyenController::class, 'capNhatPhanQuyen'])->name('cap-nhat-phan-quyen');
	Route::delete('/xoa-phan-quyen/{id}', [PhanQuyenController::class, 'xoaPhanQuyen'])->name('xoa-phan-quyen');

	// Nhân sự
	Route::get('/nhansu', [QuanlyController::class, 'nhanSu'])->middleware(['admin'])->name('nhansu');
});

// dashboard
Route::get('/dashboard', [PageController::class, 'dashBoard'])->middleware(['auth', 'actived', 'checkrole'])->name('dashboard');
Route::get('/actived', [PageController::class, 'activedPage'])->middleware(['auth'])->name('actived');
Route::get('/none-role', [PageController::class, 'noneRole'])->middleware(['auth'])->name('none-role');

// Cơ quan


Route::middleware('auth')->group(function () {
	Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

});





require __DIR__ . '/auth.php';
