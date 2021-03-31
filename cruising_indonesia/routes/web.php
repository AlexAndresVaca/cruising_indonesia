<?php

use App\Models\Post;
use App\Models\Section;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $datos = User::findOrFail(1);
    $seccion1_id = Section::select('id')->where('slug', '=', 'seccion_1')->first();
    $post_seccion1 = Post::where('section_id_fk', '=', $seccion1_id->id)->get();
    $seccion2_id = Section::select('id')->where('slug', '=', 'seccion_2')->first();
    $post_seccion2 = Post::where('section_id_fk', '=', $seccion2_id->id)->get();
    $seccion3_id = Section::select('id')->where('slug', '=', 'seccion_3')->first();
    $post_seccion3 = Post::where('section_id_fk', '=', $seccion3_id->id)->get();
    $seccion4_id = Section::select('id')->where('slug', '=', 'seccion_4')->first();
    $post_seccion4 = Post::where('section_id_fk', '=', $seccion4_id->id)->get();
    $seccion5_id = Section::select('id')->where('slug', '=', 'seccion_5')->first();
    $post_seccion5 = Post::where('section_id_fk', '=', $seccion5_id->id)->get();
    $seccion6_id = Section::select('id')->where('slug', '=', 'seccion_6')->first();
    $post_seccion6 = Post::where('section_id_fk', '=', $seccion6_id->id)->get();
    $seccion7_id = Section::select('id')->where('slug', '=', 'seccion_7')->first();
    $post_seccion7 = Post::where('section_id_fk', '=', $seccion7_id->id)->get();
    return view('welcome', compact('datos', 'post_seccion1', 'post_seccion2', 'post_seccion3', 'post_seccion4', 'post_seccion5', 'post_seccion6', 'post_seccion7',));
})->name('site');

Auth::routes(['register' => false]);
// Perfil
Route::get('/perfil', [App\Http\Controllers\UserController::class, 'ver_perfil'])->name('ver_perfil');
Route::PUT('/perfil/update', [App\Http\Controllers\UserController::class, 'actualizar'])->name('actualizar');
// Home
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/home/{type}', [App\Http\Controllers\HomeController::class, 'options'])->name('options');
// 
Route::POST('/home/{type}', [App\Http\Controllers\PostController::class, 'store'])->name('post_create');
Route::get('/home/{type}/{post}', [App\Http\Controllers\PostController::class, 'edit'])->name('post_edit');
Route::PUT('/home/{type}/{post}/update', [App\Http\Controllers\PostController::class, 'update'])->name('post_update');
Route::DELETE('/home/{type}/delete', [App\Http\Controllers\PostController::class, 'destroy'])->name('post_delete');
// 
Route::get('/dive_indonesia', [App\Http\Controllers\HomeController::class, 'dive_indo'])->name('dive_indo');
