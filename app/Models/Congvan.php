<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Congvan extends Model
{
	protected $table = 'congvan';

	protected $fillable = [
		'id',
		'id_loai_cong_van',
		'tieu_de',
		'mo_ta',
		'trang_thai',
		'nguoi_tao',
		'file',
	];

	/**
	 * Get the Nguoidung that owns the Congvan
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function nguoidung()
	{
		return $this->belongsTo(User::class, 'nguoi_tao', 'id');
	}

	/**
	 * Get the LoaiCongVan that owns the Congvan
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function loaicongvan()
	{
		return $this->belongsTo(Loaicongvan::class, 'id_loai_cong_van', 'id');
	}
}
