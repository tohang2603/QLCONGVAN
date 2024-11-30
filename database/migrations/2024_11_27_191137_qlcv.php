<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		// Phòng ban
		Schema::create('phongban', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('ten_phong_ban');
			$table->string('mo_ta');
			$table->string('nguoi_quan_ly', 255);
			$table->string('dia_chi');
			$table->string('so_dien_thoai', 10);
			$table->timestamps();
		});
		// Loại công văn
		Schema::create('loaicongvan', function (Blueprint $table) {
			$table->increments('id');
			$table->string('ten_loai_cong_van');
			$table->string('mo_ta', 255);
			$table->timestamps();
		});
		// Công văn
		Schema::create('congvan', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->unsignedInteger('id_loai_cong_van')->nullable(); // to - send
			$table->string('tieu_de', 255);
			$table->string('mo_ta', 255);
			$table->string('trang_thai', 255);
			$table->unsignedBigInteger('nguoi_tao');
			// $table->string('noi_nhan')->nullable();
			// [1, 5, 7]
			$table->string('file');
			$table->timestamps();
			// Foreign Keys
			$table->foreign('nguoi_tao')->references('id')->on('nguoidung');
			$table->foreign('id_loai_cong_van')->references('id')->on('loaicongvan');
		});
		// Nơi Nhận
		Schema::create('noinhan', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->unsignedBigInteger('id_cong_van');
			$table->unsignedBigInteger('id_phong_ban');
			$table->timestamps();
		});
		// 
		Schema::create('lichsucongvan', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->unsignedBigInteger('id_cong_van');
			$table->unsignedBigInteger('id_nguoi_thao_tac');
			$table->string('trang_thai', 255);
			$table->timestamps();
			// Foreign Keys
			$table->foreign('id_cong_van')->references('id')->on('congvan');
			$table->foreign('id_nguoi_thao_tac')->references('id')->on('nguoidung');
		});
	}
	// Thùng rác
	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('phongban');
		Schema::dropIfExists('loaicongvan');
		Schema::dropIfExists('congvan');
		Schema::dropIfExists('noi_nhan');
		Schema::dropIfExists('lichsucongvan');
	}
};
