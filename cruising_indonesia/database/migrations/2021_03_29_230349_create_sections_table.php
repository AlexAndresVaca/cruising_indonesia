<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sections', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 30);
            $table->string('slug', 30)->nullable();
            $table->boolean('titulo')->default(false);
            $table->boolean('subtitulo')->default(false);
            $table->boolean('parrafo')->default(false);
            $table->boolean('imagen')->default(false);
            $table->boolean('boton')->default(false);
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
        Schema::dropIfExists('sections');
    }
}
