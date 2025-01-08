<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CongvanCQ extends Model
{
	//
	protected $table = 'cv-cq';

	protected $fillable = [
		'id',
		'id_cong_van',
		'id_co_quan',
	];

	public $timestamps = false;

	public function congvan()
	{
		return $this->belongsTo(Congvan::class, 'id_cong_van', 'id');
	}
	public function coquan()
	{
		return $this->belongsTo(Coquan::class, 'id_co_quan', 'id');
	}
}
