<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Coquan extends Model
{
	protected $table = 'coquan';

	protected $fillable = [
		'id',
		'ten_co_quan',
		'dia_chi',
		'so_dt',
	];

	// Không lấy thời gian tạo, sửa
	public $timestamps = false;
}
