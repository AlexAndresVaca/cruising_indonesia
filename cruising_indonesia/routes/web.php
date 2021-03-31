<?php

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
    return view('welcome', compact('datos'));
})->name('site');

Auth::routes(['register' => false]);
// Perfil
Route::get('/perfil', [App\Http\Controllers\UserController::class, 'ver_perfil'])->name('ver_perfil');
Route::PUT('/perfil/update', [App\Http\Controllers\UserController::class, 'actualizar'])->name('actualizar');
// Home
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/home/{type}', [App\Http\Controllers\HomeController::class, 'options'])->name('options');
Route::POST('/home/{type}', [App\Http\Controllers\HomeController::class, 'prueba_img'])->name('options_img');
// 
Route::get('/dive_indonesia', [App\Http\Controllers\HomeController::class, 'dive_indo'])->name('dive_indo');
