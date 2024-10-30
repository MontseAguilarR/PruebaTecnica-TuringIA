<?php

namespace Database\Seeders;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use App\Models\User; 
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{

    public function run(): void
    {
        
        $roleAdmin = Role::firstOrCreate(['name' => 'admin']);
$roleUser = Role::firstOrCreate(['name' => 'user']);

$userAdmin = User::create([
    'name' => 'Admin',
    'email' => 'admin@hotmail.com',
    'password' => Hash::make('admin'),
]);
$userAdmin->assignRole($roleAdmin); // Asignar rol de admin

$userJulian = User::create([
    'name' => 'Julian',
    'email' => 'userJulian@hotmail.com',
    'password' => Hash::make('user'),
]);
$userJulian->assignRole($roleUser); // Asignar rol de user

        
    }
}
