<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');


Route::get('/admin/users', [AdminController::class, 'showUsers']);
Route::get('/admin/songs', [AdminController::class, 'showSongs']);
Route::get('/admin/events', [AdminController::class, 'showEvents']);
Route::get('/admin/reviews', [AdminController::class, 'showReviews']);

Route::post('/admin/store/song', [AdminController::class, 'storeSong']);
Route::post('/admin/store/event', [AdminController::class, 'storeEvent']);

Route::delete('/admin/users/{id}', [AdminController::class, 'destroyUser']);
Route::delete('/admin/songs/{id}', [AdminController::class, 'destroySong']);
Route::delete('/admin/events/{id}', [AdminController::class, 'destroyEvent']);


Route::get('/users/events', [UserController::class, 'getEvents']);
Route::get('/users/songs', [UserController::class, 'getSongs']);

Route::middleware(['auth'])->group(function () {
        Route::get('/dashboard', [UserController::class, 'index'])->name('dashboard');
        Route::get('/my-reviews', [UserController::class, 'myReviews'])->name('myReviews');
        Route::get('/my-playlists', [UserController::class, 'myPlaylists'])->name('myPlaylists');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
