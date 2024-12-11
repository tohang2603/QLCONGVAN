<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 */
	public function run(): void
	{
		// Tạo role
		DB::table('phanquyen')->insert([
			[
				'ten_quyen' => 'Quản Trị Viên',
				'ten_ghi_tat' => 'admin',
				'mo_ta' => 'Toàn quyền tương tác với hệ thống'
			],
			[
				'ten_quyen' => 'Nhân viên',
				'ten_ghi_tat' => 'mq2',
				'mo_ta' => 'Thêm, sửa công văn'
			],
		]);
	}
}
