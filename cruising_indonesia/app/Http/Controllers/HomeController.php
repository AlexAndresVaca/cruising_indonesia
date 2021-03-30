<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('dashboard.home');
    }
    public function options($type)
    {
        return view('dashboard.home_options', compact('type'));
    }
    public function prueba_img(Request $request, $type)
    {
        $file = $request->file('file');
        $nombre = $file->getClientOriginalName();
        return $nombre;
        // return view('dashboard.home_options', compact('type'));
    }


    // 
    public function dive_indo()
    {
        return view('dashboard.dive_indo');
    }
}
