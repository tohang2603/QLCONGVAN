<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LichSu extends Model
{
    //
    protected $table = 'lichsucongvan';

    protected $fillable = [
        'id',
        'id_cong_van',
        'id_nguoi_thao_tac',
        'trang_thai',
    ];

    public function congvan()
    {
        return $this->belongsTo(Congvan::class, 'id_cong_van', 'id');
    }

    public function nguoidung()
    {
        return $this->belongsTo(User::class, 'id_nguoi_thao_tac', 'id');
    }
}
