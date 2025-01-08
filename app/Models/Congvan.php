<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Congvan extends Model
{
	protected $table = 'congvan';

	protected $fillable = [
		'id',
		'so_cong_van',
		'tieu_de',
		'mo_ta',
		'nguoi_tao',
		'trang_thai',
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
	public function lichsu()
	{
		return $this->hasMany(LichSu::class, 'id_cong_van');
	}
	public function coquan()
	{
		return $this->belongsToMany(Coquan::class, 'cv-cq', 'id_cong_van', 'id_co_quan');
	}
	public function phongban()
	{
		return $this->belongsToMany(Phongban::class, 'cv-pb', 'id_cong_van', 'id_phong_ban');
	}
}
