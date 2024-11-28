<?php

namespace Database\Seeders;

// use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 */
	public function run(): void
	{
		// Tạo role
		DB::table('role')->insert([
			[
				'name_role' => 'Quản Trị Viên',
				'short_role' => 'admin',
				'description' => 'Toàn quyền tương tác với hệ thống'
			],
			[
				'name_role' => 'Nhân viên',
				'short_role' => 'mq2',
				'description' => 'Thêm, sửa, xóa công văn'
			],
			[
				'name_role' => 'Nhân viên phê duyệt',
				'short_role' => 'mq3',
				'description' => 'Phê duyệt công văn'
			],
			[
				'name_role' => 'Nhân viên phê duyệt, nhân viên',
				'short_role' => 'mq4',
				'description' => 'Thêm, sửa, xóa công văn, Phê duyệt công văn'
			]
		]);
	}
}
