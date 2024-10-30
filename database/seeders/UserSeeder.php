<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User; 


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{

    public function run(): void
    {
        $roleAdmin = Role::create(['name'=>'admin']);
        $roleUser = Role::create(['name'=>'user']);

        User::create([
            'name' => 'Admin',
            'email' => 'admin@hotmail.com',
            'password' => Hash::make('admin'),
        ])->assignRole('admin');


        User::create([
            'name' => 'Julian',
            'email' => 'userJulian@hotmail.com',
            'password' => Hash::make('user'),
        ])->assignRole('user');
    }
}
