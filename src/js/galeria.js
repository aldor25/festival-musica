document.addEventListener('DOMContentLoaded', function () {
    crearGaleria()
  })
   
  function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')
   
    for (let i = 1; i <= 12; i++) {
      const imagen = document.createElement('img');
      imagen.src = `/build/img/thumb/${i}.webp`;
      imagen.dataset.imagenId = i;


        // Añadir la función de mostrarImagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    const id = parseInt( e.target.dataset.imagenId );

    // Generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `/build/img/grande/${id}.webp`;
 
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    // Cuando se da clic, cerrar la iamgen
    overlay.onclick = function() {
        overlay.remove();
    }

    // Boton para cerrar imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    // Cuando se da clic se cierra imagen
    cerrarImagen.onclick = function() {
        overlay.remove();
    }

    overlay.appendChild(cerrarImagen)

    // Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}