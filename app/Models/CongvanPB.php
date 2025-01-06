<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CongvanPB extends Model
{
    protected $table = 'cv-pb';

    protected $fillable = [
        'id',
        'id_cong_van',
        'id_phong_ban',
    ];

    public $timestamps = false;

    public function congvan()
    {
        return $this->belongsTo(Congvan::class, 'id_cong_van', 'id');
    }
    public function phongban()
    {
        return $this->belongsTo(Phongban::class, 'id_phong_ban', 'id');
    }
}
