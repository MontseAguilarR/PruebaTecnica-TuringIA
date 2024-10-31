<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Songs;
use App\Models\Events;
use App\Models\Reviews;

class AdminController extends Controller
{
    public function showUsers()
{
    $users = User::all();

    return response()->json($users);
}

public function showSongs()
{
    $songs = Songs::all();

    return response()->json($songs);
}

public function showEvents()
{
    $events = Events::all();
    return response()->json($events);
}

public function showReviews()
{
    $review = Reviews::all();
    return response()->json($review);
}


public function storeSong(Request $request)
{
    $request->validate([
        'title' => 'required|string|max:255',
        'artist' => 'required|string|max:255',
        'description' => 'nullable|string',
        'date' => 'required|date',
        'image' => 'nullable|image|max:2048',
    ]);

    try {
        $song = new Songs();
        $song->title = $request->input('title');
        $song->artist = $request->input('artist');
        $song->description = $request->input('description');
        $song->date = $request->input('date'); 

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images/songs', 'public');
            $song->image = $path;
        }

        $song->save();

        return response()->json(['message' => 'Canción almacenada correctamente.'], 201);
    } catch (\Exception $e) {
        return response()->json(['message' => 'Error al almacenar la canción: ' . $e->getMessage()], 500);
    }
}


public function storeEvent(Request $request)
{
    $request->validate([
        'title' => 'required|string|max:255',
        'location' => 'nullable|string',
        'date' => 'required|date',
        'image' => 'nullable|image|max:2048',
    ]);

    try {
        $event = new Events();
        $event->title = $request->input('title');
        $event->location = $request->input('location');
        $event->date = $request->input('date'); 

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images/events', 'public');
            $event->image = $path;
        }

        $event->save();

        return response()->json(['message' => 'Evento almacenado correctamente.'], 201);
    } catch (\Exception $e) {
        return response()->json(['message' => 'Error al almacenar el evento: ' . $e->getMessage()], 500);
    }
}

public function destroyUser($id)
    {
        try {
            $user = User::findOrFail($id);
            $user->delete();

            return response()->json(['message' => 'Usuario eliminado correctamente.'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al eliminar el usuario: ' . $e->getMessage()], 500);
        }
    }

    
    public function destroySong($id)
    {
        try {
            $song = Songs::findOrFail($id);
            $song->delete();

            return response()->json(['message' => 'Canción eliminada correctamente.'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al eliminar la canción: ' . $e->getMessage()], 500);
        }
    }

    public function destroyEvent($id)
    {
        try {
            $event = Events::findOrFail($id);
            $event->delete();

            return response()->json(['message' => 'Evento eliminado correctamente.'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al eliminar el evento: ' . $e->getMessage()], 500);
        }
    }

}

