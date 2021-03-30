@extends('dashboard.home')
@section($type)
active
@endsection
@section('options')
<div class="h1 text-muted">{{$type}}</div>
<div class="h6 text-muted">- Aquí gestionaras todos los contenidos del apartado <b>{{$type}}</b></div>
<div class="row">
    <div class="col text-center">
        <button type="button" class="btn btn-lg btn-primary my-2" data-toggle="modal" data-target="#exampleModal" data-whatever="{{$type}}">Nuevo {{$type}}</button>
    </div>
</div>
<div class="row">
    <div class="col-4 mb-2">
        <div class="card shadow-lg border" style="width: 18rem;">
            <div class="blockquote-footer">ID: <cite title="Source Title">1</cite> Type: <cite>{{$type}}</cite></div>
            <a href="{{asset('resources/')}}/images/charters-komodo.jpg" target="_blank">
                <img class="card-img-top" src="{{asset('resources/')}}/images/charters-komodo.jpg" width="350" height="230" alt="Card image cap">
            </a>
            <div class="card-body">
                <h5 class="card-title h4"><b>Titulo: </b>titulo</h5>
                <hr>
                <h5 class="card-subtitle"><b>Subtitulo: </b>subtitulo</h5>
                <hr>
                <p class="card-text"><b>Texto: </b>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <hr>
                <a href="" class="btn btn-outline-secondary" target="_blank">Probar botón</a>
                <hr>
            </div>
            <div class="card-body text-right">
                <a href="" class="btn btn-primary">Editar</a>
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#eliminar" data-whatever="1">Eliminar</button>
            </div>
        </div>
    </div>
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
            <form method="POST" action="{{route('options_img','Media')}}" enctype="multipart/form-data">
                @CSRF
                <div class="modal-body">
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Titulo:</label>
                        <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Subtitulo:</label>
                        <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Texto:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Imagen:</label>
                        <input type="file" name="file" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Send message</button>
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
                Desea eliminar este <b>{{$type}}</b>?, esta acción no se podrá revertir. <b id="cod"></b>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-danger">Si, deseo eliminar</button>
            </div>
        </div>
    </div>
</div>
<!-- FIN MODALS -->
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
            modal.find('.modal-title').text('Agregar nuevo ' + recipient)
            // modal.find('.modal-body input').val(recipient)
        });
        $('#eliminar').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget) // Button that triggered the modal
            var recipient = button.data('whatever') // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this)
            modal.find('#cod').text(recipient)
        });
    });
</script>
@endsection