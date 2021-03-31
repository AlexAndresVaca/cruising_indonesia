<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Section;
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
        $sections = Section::all();
        return view('dashboard.home', compact('sections'));
    }
    public function options($type)
    {
        $sections = Section::all();
        $section = Section::where('slug', '=', $type)->first();
        $posts = Post::where('section_id_fk', '=', $section->id)->get();
        // return $section;
        return view('dashboard.home_options', compact('type', 'sections', 'section', 'posts'));
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
