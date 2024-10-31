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
            $table->string('description');
            $table->string('image')->nullable()->change();
            $table->string('path')->nullable()->change();
            $table->string('date');
            $table->timestamps();
        });
        
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Relación con users
            $table->foreignId('song_id')->constrained()->onDelete('cascade'); // Relación con songs
            $table->string('title');
            $table->string('date');
            $table->text('content');
            $table->integer('rating');
            $table->string('image')->nullable()->change();
            $table->string('path')->nullable()->change();
            $table->timestamps();
        });

        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->date('date'); 
            $table->string('location'); 
            $table->string('image')->nullable()->change();
            $table->string('path')->nullable()->change();
            $table->timestamps();
        });

        Schema::create('lists', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); 
            $table->timestamps();
        });
        
        Schema::create('list_song', function (Blueprint $table) {
            $table->id();
            $table->foreignId('list_id')->constrained()->onDelete('cascade'); 
            $table->foreignId('song_id')->constrained()->onDelete('cascade'); 
            $table->timestamps();
        });

        Schema::create('Colaborations', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('artistA');
            $table->string('artistB');
            $table->string('image')->nullable()->change();
            $table->string('path')->nullable()->change();
            $table->string('date');
            $table->integer('rating');
            $table->integer('stars');
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
