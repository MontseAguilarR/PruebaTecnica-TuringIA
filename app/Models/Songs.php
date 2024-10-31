<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Songs extends Model
{
    protected $table = 'songs';
    
    protected $fillable = [
        'title',
        'artist',
        'description',
        'date',
        'image', 
        'path'
    ];

}
