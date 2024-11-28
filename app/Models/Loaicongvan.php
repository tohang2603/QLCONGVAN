<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Loaicongvan extends Model
{
	protected $table = 'loaicongvan';

	protected $fillable = [
		'ten_loai_cong_van',
		'mo_ta',
	];

	/**
	 * Get all of the congvan for the Loaicongvan
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function congvan()
	{
		return $this->hasMany(Congvan::class, 'loai_cong_van', 'id');
	}
}
