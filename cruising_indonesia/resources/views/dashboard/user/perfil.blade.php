@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <div class="h3 text-muted">Ver perfil</div>
                </div>
                <div class="card-body">
                    @if(session('status') == true)
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Datos actualizados!</strong> Estos datos se verán reflejados en tu sitio web.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    @endif
                    <form method="POST" action="{{route('actualizar')}}">
                        @method('PUT')
                        @CSRF
                        <div class="form-group row">
                            <label for="" class="col-sm-2 col-form-label"><a href="{{$user->fb}}" target="_blank" class="h5 text-muted">Facebook</a></label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control @error('fb') is-invalid @enderror " id="" placeholder="" value="{{$user->fb}}" name="fb">
                                @error('fb')
                                <span class="invalid-feedback" role="alert">
                                    {{$errors->first('fb')}}
                                </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="" class="col-sm-2 col-form-label"><a href="{{$user->ig}}" target="_blank" class="h5 text-muted">Instagram</a></label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control @error('ig') is-invalid @enderror" id="" placeholder="" value="{{$user->ig}}" name="ig">
                                @error('ig')
                                <span class="invalid-feedback" role="alert">
                                    {{$errors->first('ig')}}
                                </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="" class="col-sm-2 col-form-label"><a href="{{$user->tw}}" target="_blank" class="h5 text-muted">Twitter</a></label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control @error('tw') is-invalid @enderror" id="" placeholder="" value="{{$user->tw}}" name="tw">
                                @error('tw')
                                <span class="invalid-feedback" role="alert">
                                    {{$errors->first('tw')}}
                                </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="" class="col-sm-2 col-form-label"><a href="{{$user->t}}" target="_blank" class="h5 text-muted">Tumblr</a></label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control @error('t') is-invalid @enderror" id="" placeholder="" value="{{$user->t}}" name="t">
                                @error('t')
                                <span class="invalid-feedback" role="alert">
                                    {{$errors->first('t')}}
                                </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="" class="col-sm-2 col-form-label"><a href="{{$user->yt}}" target="_blank" class="h5 text-muted">YouTube</a></label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control @error('yt') is-invalid @enderror" id="" placeholder="" value="{{$user->yt}}" name="yt">
                                @error('yt')
                                <span class="invalid-feedback" role="alert">
                                    {{$errors->first('yt')}}
                                </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="" class="col-sm-2 col-form-label"><a href="{{$user->pt}}" target="_blank" class="h5 text-muted">Pinterest</a></label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control @error('pt') is-invalid @enderror" id="" placeholder="" value="{{$user->pt}}" name="pt">
                                @error('pt')
                                <span class="invalid-feedback" role="alert">
                                    {{$errors->first('pt')}}
                                </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="" class="col-sm-2 col-form-label"><a href="{{$user->fl}}" target="_blank" class="h5 text-muted">Flickr</a></label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control @error('fl') is-invalid @enderror" id="" placeholder="" value="{{$user->fl}}" name="fl">
                                @error('fl')
                                <span class="invalid-feedback" role="alert">
                                    {{$errors->first('fl')}}
                                </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="" class="col-sm-2 col-form-label"><a href="https://api.whatsapp.com/send?phone={{substr($user->wsp,1)}}&text=" target="_blank" class="h5 text-muted">WhatsApp</a></label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control @error('wsp') is-invalid @enderror" id="" placeholder="" value="{{$user->wsp}}" name="wsp">
                                @error('wsp')
                                <span class="invalid-feedback" role="alert">
                                    {{$errors->first('wsp')}}
                                </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="" class="col-sm-2 col-form-label h5 text-muted"><span class="h5 text-muted">Correo</span></label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control @error('correo') is-invalid @enderror" id="" placeholder="" value="{{$user->correo}}" name="correo">
                                @error('correo')
                                <span class="invalid-feedback" role="alert">
                                    {{$errors->first('correo')}}
                                </span>
                                @enderror
                            </div>
                        </div>
                        <hr>
                        <div class="form-group row">
                            <div class="col">
                                <a href="{{route('home')}}" class="h5 text-muted"><i class="fas fa-home"></i> Ir al inicio</a>
                            </div>
                            <div class="col text-right">
                                <input type="submit" class="btn btn-primary" value="Guardar">
                            </div>
                        </div>
                        <hr>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection