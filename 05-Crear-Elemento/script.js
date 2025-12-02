/* 

 Obtener un elemento de referencia. Esta será
 el nodo de HTML donde vamos a crear el nuevo
 elemento.


*/

const peliculas = document.getElementById("peliculas");

/* 

Para crear un nuevo elemento usamos createElement( )

 sintaxis:

  document.createElement("tipoElemento");


*/

const nuevaPeli  = document.createElement( "li" );

/* 

 Para agregar el elemento al DOM, tomando el elemento de
 referencia y usamos el método append( )

 Sintaxis: 

   elementoReferencia.append(nuevoElemento); 


*/

peliculas.append(nuevaPeli);

/* 

Para agregarle contenido al nuevo elemento podemos usar
innerText

*/

nuevaPeli.innerText = "🌏Madagascar";

console.log(peliculas)


nuevaPeli.classList.add("pelicula", "fondo-dos"); // Agregar mas clases y agregar comas


//nuevaPeli.classList.add("pelicula");
//nuevaPeli.classList.add("fondo-dos");



// alert("Hola"); 
