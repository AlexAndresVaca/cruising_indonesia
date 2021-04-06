<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
        .boton-up {
            border-radius: 10px;
            background-color: rgba(0, 0, 0, .5);
            color: white;
            cursor: pointer;
            opacity: .5;
            display: none;
        }
    </style>
    <!-- Fontawesome CSS-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/v4-shims.css">
    <!-- Fontawesome JS-->
    <script defer src="https://use.fontawesome.com/releases/v5.15.3/js/all.js"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.15.3/js/v4-shims.js"></script>

</head>

<body>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/login') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">
                        @if(Auth::id())
                        <li class="nav-item border-right">
                            <a href="{{route('home')}}" class="nav-link @yield('act_home')">Home</a>
                        </li>
                        <li class="nav-item border-right">
                            <a href="{{route('dive_indo')}}" class="nav-link @yield('act_dive_indo')">Dive Indonesia</a>
                        </li>
                        <li class="nav-item border-right">
                            <a href="" class="nav-link @yield('act_div_world')">Dive in the World</a>
                        </li>
                        <li class="nav-item border-right">
                            <a href="" class="nav-link @yield('act_yatch')">Yatch</a>
                        </li>
                        <li class="nav-item border-right">
                            <a href="" class="nav-link @yield('act_resorts')">Resorts</a>
                        </li>
                        <li class="nav-item border-right">
                            <a href="" class="nav-link @yield('act_tours')">Tours</a>
                        </li>
                        <li class="nav-item border-right">
                            <a href="" class="nav-link @yield('act_b_build')">Boat Building</a>
                        </li>
                        <li class="nav-item border-right">
                            <a href="" class="nav-link @yield('act_news')">News & Deals</a>
                        </li>
                        @endif
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('site') }}">Ver sitio</a>
                        </li>
                        @if (Route::has('login'))
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                        </li>
                        @endif
                        @else
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle text-uppercase" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->name }}
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{route('ver_perfil')}}">
                                    Perfil
                                </a>
                                <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    @csrf
                                </form>
                            </div>
                        </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
        <footer>
            @if(Auth::id())
            <div class="fixed-bottom text-right">
                <i class="fa fa-angle-up boton-up" style="width: 2.8rem; height: 2.8rem;"></i>
            </div>
            @endif
        </footer>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script>
        $(document).ready(function() {
            $('.boton-up').click(
                function() {
                    $('body, html').animate({
                        scrollTop: '0px'
                    }, 300);
                }
            );
            $(window).scroll(function() {
                if ($(this).scrollTop() > 0) {
                    $('.boton-up').slideDown(300);
                } else {
                    $('.boton-up').slideUp(300);
                }
            });
        });
    </script>
    @yield('js')
</body>

</html>