<?php

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
    return view('welcome');
})->name('site');

Auth::routes(['register' => false]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/home/{type}', [App\Http\Controllers\HomeController::class, 'options'])->name('options');
Route::POST('/home/{type}', [App\Http\Controllers\HomeController::class, 'prueba_img'])->name('options_img');
// 
Route::get('/dive_indonesia', [App\Http\Controllers\HomeController::class, 'dive_indo'])->name('dive_indo');

