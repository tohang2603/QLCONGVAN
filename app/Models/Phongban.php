<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Phongban extends Model
{
    //
    protected $table = 'phongban';

    protected $fillable = [
        'id',
        'ten_phong_ban',
        'mo_ta',
        'nguoi_quan_ly',
        'dia_chi',
        'so_dt',
    ];
    public $timestamps = false;
    public function cvdenvadi()
    {
        return $this->belongsTo(Cvdenvadi::class, 'id_phong_ban','id'); // Đã thêm relationship cvdenvadi
    }
}
