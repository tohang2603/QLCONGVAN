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
		// Cơ quan
		Schema::create('coquan', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('ten_co_quan');
			$table->string('dia_chi');
			$table->string('so_dien_thoai', 10);
			$table->string('email');
			$table->string('ghi_chu');
			$table->timestamps();
		});
		// Phòng ban
		Schema::create('phongban', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('ten_phong_ban');
			$table->string('mo_ta');
			$table->unsignedBigInteger('nguoi_quan_ly');
			$table->unsignedBigInteger('idCoQuan')->nullable();
			$table->string('dia_chi');
			$table->string('so_dien_thoai', 10);
			$table->timestamps();
			// Foreign Keys
			$table->foreign('nguoi_quan_ly')->references('id')->on('nguoidung');
			$table->foreign('idCoQuan')->references('id')->on('coquan');
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
			$table->unsignedBigInteger('idCoQuan')->nullable();
			$table->string('loai_cong_van', 5)->nullable(); // to - send
			$table->string('tieu_de', 255);
			$table->string('mo_ta', 255);
			$table->string('trang_thai', 255);
			$table->unsignedBigInteger('nguoi_tao');
			$table->unsignedBigInteger('nguoi_xu_ly');
			// $table->unsignedBigInteger('nguoi_phe_duyet');
			$table->integer('muc_do_khan_cap')->unsigned();
			$table->string('noi_gui')->nullable();
			$table->string('noi_nhan')->nullable();
			$table->string('file');
			$table->timestamps();
			// Foreign Keys
			$table->foreign('idCoQuan')->references('id')->on('coquan');
			$table->foreign('nguoi_tao')->references('id')->on('nguoidung');
			$table->foreign('nguoi_xu_ly')->references('id')->on('nguoidung');
		});
		// 
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('coquan');
		Schema::dropIfExists('phongban');
		Schema::dropIfExists('loaicongvan');
		Schema::dropIfExists('congvan');
	}
};
