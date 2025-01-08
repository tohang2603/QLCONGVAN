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
		Schema::create("coquan", function (Blueprint $table) {
			$table->bigIncrements("id");
			$table->string('ten_co_quan', 255);
			$table->string('dia_chi', 255);
			$table->string('so_dt', 10);
		});
		// Phòng ban
		Schema::create('phongban', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('ten_phong_ban');
			$table->string('mo_ta');
			$table->string('nguoi_quan_ly', 255);
			$table->string('dia_chi', 255);
			$table->string('so_dt', 10);
			$table->timestamps();
		});
		// Công văn
		Schema::create('congvan', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('so_cong_van', 255);
			$table->string('tieu_de', 255);
			$table->string('mo_ta', 255);
			$table->unsignedBigInteger('nguoi_tao');
			$table->string('trang_thai', 5);
			$table->string('file');
			$table->string('slug', 255)->nullable()->unique(); //: Chuỗi duy nhất (dùng để định danh công văn).
			$table->foreign('nguoi_tao')->references('id')->on('users');
			$table->timestamps();
		});
		// Công văn - Phòng ban
		Schema::create('cv-pb', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->unsignedBigInteger('id_cong_van');
			$table->unsignedBigInteger('id_phong_ban');
			// Foreign Keys
			$table->foreign('id_cong_van')->references('id')->on('congvan');
			$table->foreign('id_phong_ban')->references('id')->on('phongban');
		});
		// Công văn - Cơ quan
		Schema::create('cv-cq', function (Blueprint $table) {
			$table->bigIncrements(column: 'id');
			$table->unsignedBigInteger('id_cong_van');
			$table->unsignedBigInteger('id_co_quan');
			// Foreign Keys
			$table->foreign('id_cong_van')->references('id')->on('congvan');
			$table->foreign('id_co_quan')->references('id')->on('coquan');
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
			$table->foreign('id_nguoi_thao_tac')->references('id')->on('users');
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('coquan');
		Schema::dropIfExists('phongban');
		Schema::dropIfExists('cvdenvadi');
		Schema::dropIfExists('lichsucongvan');
		Schema::dropIfExists('congvan');
	}
};
