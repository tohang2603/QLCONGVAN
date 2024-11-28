<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Coquan extends Model
{
    protected $table = 'coquan';

    protected $fillable = [
        'ten_co_quan',
        'dia_chi',
        'so_dien_thoai',
        'email',
        'ghi_chu',
    ];

    /**
     * Get all of the phongbans for the Coquan
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function phongban()
    {
        return $this->hasMany(Phongban::class, 'idCoQuan', 'id');
    }

    /**
     * Get all of the congvan for the Coquan
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function congvan()
    {
        return $this->hasMany(Congvan::class, 'idCoQuan', 'id');
    }
}
