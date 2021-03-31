<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Validación
        $request->validate([
            'titulo' => '',
            'subtitulo' => '',
            'parrafo' => '',
            'imagen' => 'image',
            'boton' => '',
        ], [
            'imagen.image' => 'Solo puedes subir archivos tipo imágen.'
        ]);
        //Almacenar
        $new_post = new Post();
        $new_post->titulo = $request->titulo;
        $new_post->parrafo = $request->parrafo;
        $new_post->boton = $request->boton;

        if ($request->hasFile('imagen')) {
            $file = $request->file('imagen');
            // Obtener nombre de imagen
            // $nombre = $file->getClientOriginalName();
            $nombre = Str::random(10) . "." . $request->file('imagen')->extension();
            //Almacenar Imagen
            Storage::disk('images')->put($nombre, File::get($file));
            //Almacenar ruta de Imagen en la base de datos
            $url = '/resources/images/up/' . $nombre;
            $new_post->imagen = $url;
        }
        $new_post->section_id_fk = $request->fk;
        $new_post->save();
        // 
        // return $new_post;
        // Regresar
        return back()->with(['status_create' => true]);
        // return $request->all();
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit($type, Post $post)
    {
        //
        $sections = Section::all();
        $section = Section::where('id', '=', $post->section_id_fk)->first();
        // return $post;
        return view('dashboard.home_options_edit', compact('type', 'post', 'sections', 'section'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $type, $id)
    {
        $post_update = Post::where('id', '=', $id)->first();
        // Validar información
        $request->validate([
            'titulo' => '',
            'subtitulo' => '',
            'parrafo' => '',
            'imagen' => 'image',
            'boton' => '',
        ], [
            'imagen.image' => 'Solo puedes subir archivos tipo imágen.'
        ]);
        // Remplazar información
        $post_update->titulo = $request->titulo;
        $post_update->parrafo = $request->parrafo;
        $post_update->boton = $request->boton;
        // Agregar imagen
        if ($request->hasFile('imagen')) {
            // Eliminar imagen anterior
            if ($post_update->imagen != null) {
                $array = explode("/", $post_update->imagen);
                Storage::disk('images')->delete($array[4]);
            }
            $file = $request->file('imagen');
            $nombre = Str::random(10) . "." . $request->file('imagen')->extension();
            //Almacenar Imagen
            Storage::disk('images')->put($nombre, File::get($file));
            //Almacenar ruta de Imagen en la base de datos
            $url = '/resources/images/up/' . $nombre;
            $post_update->imagen = $url;
        }
        $post_update->save();
        // Regresar
        return back()->with(['status_update' => true]);
        // return $request->all();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy($type, Request $request)
    {
        //
        $post_delete = Post::findOrFail($request->id);
        if ($post_delete->imagen != null) {
            $array = explode("/", $post_delete->imagen);
            Storage::disk('images')->delete($array[4]);
        }
        $post_delete->delete();
        return back()->with(['status_delete' => true]);
    }
}
