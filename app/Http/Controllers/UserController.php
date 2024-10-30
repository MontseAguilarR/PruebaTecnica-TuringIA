<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        
    $user = Auth::user(); // Obtener el usuario autenticado

    // Verificar si el usuario tiene un rol específico
    $hasUserRole = $user->hasRole('user'); // Esto debería ser false para el Admin
    $hasAdminRole = $user->hasRole('admin'); // Esto debería ser true para el Admin

    // Para depuración
    // dd($user, $hasUserRole, $hasAdminRole); // Muestra los valores en pantalla

    return Inertia::render('Dashboard', [
        'user' => [
            'name' => $user->name,
            'email' => $user->email,
            'hasUserRole' => $hasUserRole,
            'hasAdminRole' => $hasAdminRole,
        ]
    ]);
    
    }

    public function myReviews()
    {
        // Lógica para mostrar las reseñas del usuario
        return Inertia::render('user.reviews'); // Asegúrate de que la vista exista
    }

    public function myPlaylists()
    {
        // Lógica para mostrar las playlists del usuario
        return Inertia::render('user.playlists'); // Asegúrate de que la vista exista
    }
}

