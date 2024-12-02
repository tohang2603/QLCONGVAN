<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cvdenvadi extends Model
{
    protected $table = 'cvdenvadi';

    protected $fillable = [
        'id',
        'id_cong_van',
        'id_co_quan',
        'id_phong_ban',
        'trang_thai'
    ];

    public function congvan()
    {
        return $this->belongsTo(Congvan::class, 'id_cong_van', 'id');
    }

    public function phongban()
    {
        return $this->belongsTo(Phongban::class, 'id_phong_ban', 'id');
    }
    public function coquan()
    {
        return $this->belongsTo(Coquan::class,'id_co_quan', 'id');
    }
}
