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
		// Tạo table role
		Schema::create('phanquyen', function (Blueprint $table) {
			$table->increments('id');
			$table->string('ten_quyen');
			$table->string('ten_ghi_tat')->unique();
			$table->string('mo_ta')->nullable();
		});
		// 
		Schema::create('nguoidung', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('ho_ten');
			$table->string('email')->unique();
			$table->string('mat_khau')->nullable();
			$table->unsignedInteger('id_ma_quyen')->default(2);
			$table->rememberToken();
			$table->timestamps();
			// Foreign Keys
			$table->foreign('id_ma_quyen')->references('id')->on('phanquyen');
		});
		//
		Schema::create('password_reset_tokens', function (Blueprint $table) {
			$table->string('email')->primary();
			$table->string('token');
			$table->timestamp('created_at')->nullable();
		});
		//
		Schema::create('sessions', function (Blueprint $table) {
			$table->string('id')->primary();
			$table->foreignId('user_id')->nullable()->index();
			$table->string('ip_address', 45)->nullable();
			$table->text('user_agent')->nullable();
			$table->longText('payload');
			$table->integer('last_activity')->index();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('nguoidung');
		Schema::dropIfExists('phanquyen');
		Schema::dropIfExists('password_reset_tokens');
		Schema::dropIfExists('sessions');
	}
};
