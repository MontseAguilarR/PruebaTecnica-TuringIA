<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ViewsController extends Controller
{
    public function index()
    {
        // Obtén el usuario autenticado
        $user = Auth::user();
        
        // Asegúrate de que el usuario tenga roles asignados
        $roles = $user->getRoleNames(); // Esto devuelve una colección de nombres de roles

        return Inertia::render('YourViewName', [
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
                'roles' => $roles // Pasa los roles a la vista
            ]
        ]);
    }
}
