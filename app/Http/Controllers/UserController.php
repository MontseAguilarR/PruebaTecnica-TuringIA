<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Songs;
use App\Models\Events;

class UserController extends Controller
{
    public function index(Request $request)
    {
        
    $user = Auth::user(); 

    
    $hasUserRole = $user->hasRole('user');
    $hasAdminRole = $user->hasRole('admin');


    return Inertia::render('Dashboard', [
        'user' => [
            'name' => $user->name,
            'email' => $user->email,
            'hasUserRole' => $hasUserRole,
            'hasAdminRole' => $hasAdminRole,
        ]
    ]);
    
    }

    public function getSongs()
   {
    $songs = Songs::all();

    return response()->json($songs);
   }

    public function getEvents()
   {
    $events = Events::all();

    return response()->json($events);
   }

    // public function myReviews()
    // {
    //     
    //     return Inertia::render('user.reviews'); // Asegúrate de que la vista exista
    // }

    public function myPlaylists()
    {
        
        return Inertia::render('user.playlists'); // Asegúrate de que la vista exista
    }


}

