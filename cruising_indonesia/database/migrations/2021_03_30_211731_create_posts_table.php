<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('titulo')->default('Sin titulo');
            $table->string('subtitulo')->default('Sin subtitulo');
            $table->longText('parrafo')->nullable();
            $table->longText('imagen')->nullable();
            $table->string('boton')->default('');
            $table->unsignedBigInteger('section_id_fk');
            $table->foreign('section_id_fk')->references('id')->on('sections');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
