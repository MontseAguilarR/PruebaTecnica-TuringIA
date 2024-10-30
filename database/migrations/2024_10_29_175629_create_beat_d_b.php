<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('songs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('artist');
            $table->string('gender');
            $table->string('image');
            $table->string('path');
            $table->string('album')->nullable();
            $table->integer('year')->nullable();
            $table->unsignedInteger('likes')->default(0);
            $table->timestamps();
        });
        
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Relación con users
            $table->foreignId('song_id')->constrained()->onDelete('cascade'); // Relación con songs
            $table->string('title');
            $table->string('date');
            $table->text('content');
            $table->integer('rating'); // Calificación de la reseña (por ejemplo, del 1 al 5)
            $table->string('image');
            $table->string('path');
            $table->timestamps();
        });

        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->date('date'); // Fecha del evento
            $table->string('location'); // Ubicación del evento
            $table->timestamps();
        });

        Schema::create('playlists', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Relación con users
            $table->timestamps();
        });
        
        Schema::create('playlist_song', function (Blueprint $table) {
            $table->id();
            $table->foreignId('playlist_id')->constrained()->onDelete('cascade'); // Relación con playlists
            $table->foreignId('song_id')->constrained()->onDelete('cascade'); // Relación con songs
            $table->timestamps();
        });

        Schema::create('song_comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('song_id')->constrained()->onDelete('cascade'); // Relación con songs
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Relación con users
            $table->text('content'); // Contenido del comentario
            $table->timestamps();
        });

        Schema::create('review_comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('review_id')->constrained()->onDelete('cascade'); // Relación con reviews
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Relación con users
            $table->text('content'); // Contenido del comentario
            $table->timestamps();
        });     
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        
    }
};
