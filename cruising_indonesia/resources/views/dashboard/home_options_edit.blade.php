@extends('dashboard.home')
@section($type)
active
@endsection
@section('options')
<div class="h1 text-muted">Editar información</div>
<div class="h6 text-muted">- Vas a editar el contenido de este post, estos cambios se verán reflejados en tu sitio web.</div>
@if(session('status_update'))
<div class="row">
    <div class="col">
        <div class="alert alert-info alert-dismissible fade show" role="alert">
            <strong>Listo! </strong> Se ha actualizo este post, puedes ver sus cambios en el sitio web.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
</div>
@endif
<div class="row">
    @if($section->imagen)
    <div class="col">
        <img src="{{asset($post->imagen)}}" class="rounded float-left w-100" alt="...">
    </div>
    @endif
    <div class="col">
        <form method="POST" action="{{route('post_update',[$type, $post->id])}}" enctype="multipart/form-data">
            @method('PUT')
            @CSRF
            <div class="modal-body">
                <div class="form-group d-none">
                    <label for="recipient-name" class="col-form-label">FK:</label>
                    <input type="text" class="form-control" id="" value="{{$section->id}}" name="fk">
                </div>
                @if($section->titulo)
                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Titulo:</label>
                    <input type="text" class="form-control" id="" name="titulo" value="{{$post->titulo}}">
                </div>
                @endif
                @if($section->parrafo)
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Texto:</label>
                    <textarea class="form-control" name="parrafo" id="" rows="10">{{$post->parrafo}}</textarea>
                </div>
                @endif
                @if($section->imagen)
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Cambiar de imagen:</label>
                    <input type="file" name="imagen" />
                </div>
                @endif
                @if($section->boton)
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Destino del botón:</label>
                    <input type="text" class="form-control" name="boton" id="" value="{{$post->boton}}">
                </div>
                @endif
            </div>
            <div class="modal-footer row justify-content-between">
                <a class="text-secondary" href="{{route('options',$type)}}"><i class="fas fa-chevron-left"></i> Regresar</a>
                <button type="submit" class="btn btn-info">Actualizar</button>
            </div>
        </form>
    </div>
</div>

@endsection
@section('js')
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