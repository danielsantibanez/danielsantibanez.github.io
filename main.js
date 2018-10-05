function saluda() {
  alert("Hola, como estas?");
}

function agregarComentario() {
  console.log("Agregando comentario");

  //Obteniendo lo ingresado por el usuario
  var textNuevoComentario = document.getElementById("nuevo-comentario");
  console.log(textNuevoComentario);

  var comentarioIngresado = textNuevoComentario.value;
  console.log(comentarioIngresado);

  //Creando comentario
  var comentario = document.createElement("p");
  comentario.textContent = comentarioIngresado;
  console.log(comentario);

  //Mostrarlo en el sitio
  var seccionComentario = document.getElementById("seccion-comentarios");
  console.log(seccionComentario);
  seccionComentario.appendChild(comentario);

  textNuevoComentario.value = "";
}
