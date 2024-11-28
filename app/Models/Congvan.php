<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Congvan extends Model
{
	protected $table = 'congvan';

	protected $fillable = [
		'idCoQuan',
		'loai_cong_van',
		'tieu_de',
		'mo_ta',
		'trang_thai',
		'nguoi_tao',
		'nguoi_xu_ly',
		'nguoi_phe_duyet',
		'muc_do_khan_cap',
		'noi_gui',
		'noi_nhan',
		'file',
	];

	/**
	 * Get the CoQuan that owns the Congvan
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function coquan()
	{
		return $this->belongsTo(Coquan::class, 'idCoQuan', 'id');
	}

	/**
	 * Get the LoaiCongVan that owns the Congvan
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function loaicongvan()
	{
		return $this->belongsTo(Loaicongvan::class, 'idLoaiCongVan', 'id');
	}
}
