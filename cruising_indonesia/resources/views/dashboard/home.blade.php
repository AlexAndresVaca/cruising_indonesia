@extends('layouts.app')
@section('act_home')
active
@endsection
@section('content')
<div class="container">
    <div class="row">
        <div class="col p-xs-0">
            <div class="card">
                <div class="card-header text-muted">
                    <h2 class="h1">Home</h2>
                    <h3 class="h5 card-subtitle">Administrador de la pagina <b>Home</b></h3>
                </div>
                <div class="card-body p-0">
                    <div class="container-fluid">
                        <div class="row d-block d-md-none">
                            <div class="col px-0">
                                <div class="dropdown show">
                                    <a class="btn btn-block btn-light dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Menu
                                    </a>

                                    <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
                                        <a href="{{route('options','Media')}}" class="dropdown-item @yield('Media')">
                                            Media
                                        </a>
                                        <a href="{{route('options','Indonesia')}}" class="dropdown-item @yield('Indonesia')">
                                            Indonesia
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2 px-0 d-none d-md-inline-block">
                                <div class="list-group text-center">
                                    <a href="{{route('options','Media')}}" class="list-group-item list-group-item-action @yield('Media')">
                                        Media
                                    </a>

                                    <a href="{{route('options','Indonesia')}}" class="list-group-item list-group-item-action @yield('Indonesia')">
                                        Indonesia
                                    </a>

                                </div>
                            </div>
                            <div class="col-lg-10 col-md-10 col-sm-12 py-2">
                                @yield('options')
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection