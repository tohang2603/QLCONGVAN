<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    //
    protected $table = 'phanquyen';

    protected $fillable = [
        'id',
        'ten_quyen',
        'ten_ghi_tat',
        'mo_ta',
    ];
}
