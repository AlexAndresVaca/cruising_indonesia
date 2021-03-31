<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\Section;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $new_user = new User();
        $new_user->name = 'Admin';
        $new_user->fb = 'https://www.facebook.com/';
        $new_user->ig = 'https://www.instagram.com/?hl=es';
        $new_user->tw = 'https://twitter.com/?lang=es';
        $new_user->t = 'https://www.tumblr.com/';
        $new_user->yt = 'https://www.youtube.com/';
        $new_user->pt = 'https://www.pinterest.es/';
        $new_user->fl = 'https://www.flickr.com/';
        $new_user->wsp = '+6281337007282';
        $new_user->correo = 'info@cruisingindonesia.com';
        $new_user->email = 'admin@gmail.com';
        $new_user->password = bcrypt('admin1234');
        $new_user->remember_token = Str::random(10);
        $new_user->save();
        // 
        $new_section = new Section();
        $new_section->nombre = 'Seccion 1';
        $new_section->slug = strtolower($new_section->nombre);
        $new_section->slug = strtr($new_section->slug, " ", "_");
        $new_section->titulo = true;
        $new_section->subtitulo = false;
        $new_section->parrafo = true;
        $new_section->imagen = true;
        $new_section->boton = true;
        $new_section->save();
        // 
        $new_section2 = new Section();
        $new_section2->nombre = 'Seccion 2';
        $new_section2->slug = strtolower($new_section2->nombre);
        $new_section2->slug = strtr($new_section2->slug, " ", "_");
        $new_section2->titulo = true;
        $new_section2->subtitulo = true;
        $new_section2->parrafo = true;
        $new_section2->imagen = true;
        $new_section2->boton = true;
        $new_section2->save();
        // 
        $new_section3 = new Section();
        $new_section3->nombre = 'Seccion 3';
        $new_section3->slug = strtolower($new_section3->nombre);
        $new_section3->slug = strtr($new_section3->slug, " ", "_");
        $new_section3->titulo = true;
        $new_section3->subtitulo = false;
        $new_section3->parrafo = true;
        $new_section3->imagen = true;
        $new_section3->boton = true;
        $new_section3->save();
        // 
        $new_section4 = new Section();
        $new_section4->nombre = 'Seccion 4';
        $new_section4->slug = strtolower($new_section4->nombre);
        $new_section4->slug = strtr($new_section4->slug, " ", "_");
        $new_section4->titulo = true;
        $new_section4->subtitulo = false;
        $new_section4->parrafo = true;
        $new_section4->imagen = true;
        $new_section4->boton = true;
        $new_section4->save();
        // 
        $new_section5 = new Section();
        $new_section5->nombre = 'Seccion 5';
        $new_section5->slug = strtolower($new_section5->nombre);
        $new_section5->slug = strtr($new_section5->slug, " ", "_");
        $new_section5->titulo = true;
        $new_section5->subtitulo = false;
        $new_section5->parrafo = true;
        $new_section5->imagen = true;
        $new_section5->boton = true;
        $new_section5->save();
        // 
        $new_section6 = new Section();
        $new_section6->nombre = 'Seccion 6';
        $new_section6->slug = strtolower($new_section6->nombre);
        $new_section6->slug = strtr($new_section6->slug, " ", "_");
        $new_section6->titulo = true;
        $new_section6->subtitulo = false;
        $new_section6->parrafo = false;
        $new_section6->imagen = true;
        $new_section6->boton = true;
        $new_section6->save();
        // 
        $new_section7 = new Section();
        $new_section7->nombre = 'Seccion 7';
        $new_section7->slug = strtolower($new_section7->nombre);
        $new_section7->slug = strtr($new_section7->slug, " ", "_");
        $new_section7->titulo = true;
        $new_section7->subtitulo = false;
        $new_section7->parrafo = true;
        $new_section7->imagen = false;
        $new_section7->boton = true;
        $new_section7->save();
        // 
        $new_post = new Post();
        $new_post->titulo = "LIVEABOARD: CRUISES FOR SCUBA DIVERS";
        // $new_post->subtitulo = false;
        $new_post->parrafo = "By boat in the largest archipelago in the world, sail and dive with the greatest biodiversity on the planet. There is no place like Indonesia to navigate in pristine environments, still remote areas without the slightest tourist structure, and which you can reach and visit with maximum comfort. Yes, only by liveaboard. Cruising Indonesia is at home in these seas.";
        // $new_post->imagen = false;
        // $new_post->boton = true;
        $new_post->section_id_fk = 1;
        $new_post->save();
    }
}
