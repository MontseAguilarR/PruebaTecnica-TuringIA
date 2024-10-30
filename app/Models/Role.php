<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Role as SpatieRole; // Asegúrate de usar el modelo de Spatie

class Role extends SpatieRole
{
    use HasFactory;

    protected $fillable = ['name'];

    // Cambia a belongsToMany
    public function users()
    {
        return $this->belongsToMany(User::class, 'model_has_roles', 'role_id', 'model_id');
    }
}

