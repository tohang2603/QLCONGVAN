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
		Schema::create('role', function (Blueprint $table) {
			$table->increments('id');
			$table->string('name_role');
			$table->string('short_role')->unique();
			$table->string('description')->nullable();
		});
		// 
		Schema::create('users', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('name');
			$table->string('email')->unique();
			$table->dateTime('email_verified_at')->nullable();
			$table->string('password')->nullable();
			$table->integer('id_role')->unsigned()->default(2);
			// $table->string('provider')->nullable();
			// $table->string('provider_id')->nullable();
			// $table->string('provider_token')->nullable();
			$table->string('avatar')->nullable();
			$table->string('slug')->nullable()->unique();
			$table->rememberToken();
			$table->timestamps();
			// Foreign Keys
			$table->foreign('id_role')->references('id')->on('role');
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
		Schema::dropIfExists('roles');
		Schema::dropIfExists('users');
		Schema::dropIfExists('password_reset_tokens');
		Schema::dropIfExists('sessions');
	}
};
