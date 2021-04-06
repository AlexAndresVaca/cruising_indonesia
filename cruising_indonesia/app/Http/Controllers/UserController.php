<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth');
    }
    // 
    public function ver_perfil()
    {
        $id = Auth::id();
        $user = User::findOrFail($id);
        // return $user;
        return view('dashboard.user.perfil', compact('user'));
    }
    public function actualizar(Request $request)
    {
        $id = Auth::id();
        $request->validate([
            'fb' => 'url|max:255',
            'ig' => 'url|max:255',
            'tw' => 'url|max:255',
            't' => 'url|max:255',
            'yt' => 'url|max:255',
            'pt' => 'url|max:255',
            'fl' => 'url|max:255',
            'wsp' => 'starts_with:+|size:14',
            'correo' => 'email|max:255',
        ], [
            'fb.url' => 'URL no válida',
            'ig.url' => 'URL no válida',
            'tw.url' => 'URL no válida',
            't.url' => 'URL no válida',
            'yt.url' => 'URL no válida',
            'pt.url' => 'URL no válida',
            'fl.url' => 'URL no válida',
            'wsp.starts_with' => 'El numero de wsp debe iniciar con +',
            'wsp.size' => 'El numero de wsp debe contener 14 caracteres en total',
            'correo.email' => 'No es un correo válido',
        ]);
        $update_user = User::findOrFail($id);
        $update_user->fb = $request->fb;
        $update_user->ig = $request->ig;
        $update_user->tw = $request->tw;
        $update_user->t = $request->t;
        $update_user->yt = $request->yt;
        $update_user->pt = $request->pt;
        $update_user->fl = $request->fl;
        $update_user->wsp = $request->wsp;
        $update_user->correo = $request->correo;
        $update_user->save();
        return back()->with(
            'status',
            true
        );
    }
}
