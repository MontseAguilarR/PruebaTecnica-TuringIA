<?php

namespace Database\Seeders;

use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use App\Models\User; 
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // Crear roles
        $roleAdmin = Role::firstOrCreate(['name' => 'admin']);
        $roleUser = Role::firstOrCreate(['name' => 'user']);

        // Crear usuario Admin
        $userAdmin = User::create([
            'name' => 'Admin',
            'email' => 'admin@hotmail.com',
            'password' => Hash::make('admin_password'), // Añadir contraseña para el admin
        ]);
        $userAdmin->assignRole($roleAdmin); // Asignar rol de admin
        
        // Crear usuario Julian
        $userJulian = User::create([
            'name' => 'Julian',
            'email' => 'userJulian@hotmail.com',
            'password' => Hash::make('user_password'), // Asignar contraseña
        ]);
        $userJulian->assignRole($roleUser); // Asignar rol de user
    }
}

