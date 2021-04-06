@extends('dashboard.home')
@section($type)
active
@endsection
@section('options')
<div class="h1 text-muted">{{$section->nombre}}</div>
<div class="h6 text-muted">- Aquí gestionaras todos los contenidos del apartado <b>{{$type}}</b></div>
<div class="row">
    <div class="col text-center">
        <button type="button" class="btn btn-lg btn-primary my-2" data-toggle="modal" data-target="#exampleModal" data-whatever="{{$section->nombre}}">Nuevo</button>
    </div>
</div>
@if(session('status_create'))
<div class="row">
    <div class="col">
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Listo!</strong> Ahora lo puedes ver en tu sitio web.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
</div>
@endif
@if(session('status_delete'))
<div class="row">
    <div class="col">
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Eliminado!</strong> Se ha removido este post del sitio web.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
</div>
@endif
<div class="row">
    @foreach($posts as $item)
    <div class="col-xl-4 col-lg-6 mb-4">
        <div class="card shadow-lg border">
            <div class="blockquote-footer d-none">ID: <cite title="Source Title">{{$item->id}}</cite> Type:
                <cite>{{$section->nombre}}</cite>
            </div>
            @if($section->imagen)
            <a href="{{asset($item->imagen)}}" target="_blank">
                <img class="card-img-top" src="{{asset($item->imagen)}}" width="350" height="230" alt="Card image cap">
            </a>
            @endif
            <div class="card-body">
                @if($section->titulo)
                <h5 class="card-title h4"><b>Titulo: </b>{{$item->titulo}}</h5>
                <hr>
                @endif
                @if($section->subtitulo)
                <h5 class="card-subtitle"><b>Subtitulo: </b>{{$item->subtitulo}}</h5>
                <hr>
                @endif
                @if($section->parrafo)
                <p class="card-text text-justify"><b>Texto: </b>{{$item->parrafo}}</p>
                <hr>
                @endif
                @if($section->boton)
                <a href="" class="btn btn-outline-secondary" target="_blank">Probar botón</a>
                <hr>
                @endif
            </div>
            <div class="card-body text-right">
                <a href="{{route('post_edit',[$type,$item])}}" class="btn btn-primary">Editar</a>
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#eliminar" data-whatever="{{$item->id}}">Eliminar</button>
            </div>
        </div>
    </div>
    @endforeach
</div>
<!-- MODALS -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Agregar</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form method="POST" action="{{route('post_create',$type)}}" enctype="multipart/form-data">
                @CSRF
                <div class="modal-body">
                    <div class="form-group">
                        <!-- <label for="recipient-name" class="col-form-label">FK:</label> -->
                        <input type="hidden" class="form-control" id="" value="{{$section->id}}" name="fk">
                    </div>
                    @if($section->titulo)
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Titulo:</label>
                        <input type="text" class="form-control @error('titulo')is-invalid @enderror" id="" name="titulo" value="{{old('titulo')}}">
                        @error('titulo')
                        <span class="invalid-feedback" role="alert">
                            {{$errors->first('titulo')}}
                        </span>
                        @enderror
                    </div>
                    @endif
                    @if($section->subtitulo)
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Subtitulo:</label>
                        <input type="text" class="form-control @error('subtitulo')is-invalid @enderror" id="" name="subtitulo" value="{{old('subtitulo')}}">
                        @error('subtitulo')
                        <span class="invalid-feedback" role="alert">
                            {{$errors->first('subtitulo')}}
                        </span>
                        @enderror
                    </div>
                    @endif
                    @if($section->parrafo)
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Texto:</label>
                        <textarea class="form-control @error('parrafo')is-invalid @enderror" id="" name="parrafo">{{old('parrafo')}}</textarea>
                        @error('parrafo')
                        <span class="invalid-feedback" role="alert">
                            {{$errors->first('parrafo')}}
                        </span>
                        @enderror
                    </div>
                    @endif
                    @if($section->imagen)
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Imagen:</label><br>
                        <input type="file" class="@error('imagen')is-invalid @enderror" name="imagen" />
                        @error('imagen')
                        <span class="invalid-feedback" role="alert">
                            {{$errors->first('imagen')}}
                        </span>
                        @enderror
                    </div>
                    @endif
                    @if($section->boton)
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Destino del botón:</label>
                        <input type="text" class="form-control @error('boton')is-invalid @enderror" id="" name="boton" value="{{old('boton')}}">
                        @error('boton')
                        <span class="invalid-feedback" role="alert">
                            {{$errors->first('boton')}}
                        </span>
                        @enderror
                    </div>
                    @endif
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- Modal Eliminar-->
<div class="modal fade" id="eliminar" tabindex="-1" role="dialog" aria-labelledby="eliminarModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Atención!</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Desea eliminar de la <b>{{$section->nombre}}</b> este elemento?, esta acción no se podrá revertir.
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cerrar</button>
                <form action="{{route('post_delete',$type)}}" method="POST">
                    @method('delete')
                    @CSRF
                    <input type="hidden" value="" id="cod" name="id">
                    <button type="submit" class="btn btn-danger">Si, deseo eliminar</button>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- FIN MODALS -->
@endsection
@section('js')
@if ($errors->any())
<script>
    $(document).ready(function() {
        // 
        $('#exampleModal').modal('show');
    });
</script>
@endif
<script>
    $(document).ready(function() {
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget) // Button that triggered the modal
            var recipient = button.data('whatever') // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this)
            modal.find('.modal-title').text('Nuevo elemento en ' + recipient)
            // modal.find('.modal-body input').val(recipient)
        });
        $('#eliminar').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget) // Button that triggered the modal
            var recipient = button.data('whatever') // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this)
            modal.find('#cod').val(recipient)
        });
    });
</script>
@endsection