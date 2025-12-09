/* 

 Funciones Eventos 

 La función en un evento es el Handler. Es lo que se ejecuta cuando ocurre el evento.

 1. Evento con Función Declarada

 Esta función se escribe por fuera del evento y se pasa como argumento del Listener.

 Sintaxis:

  target.eventListener( trigger, eventHandler );

  function eventHandler( ) { 
   // Código que se ejecuta
   }



*/

// Referencias 

const declarada = document.getElementById(`declarada`);

// Evento con función declarada 

declarada.addEventListener(`click`, functionDeclarada );

function functionDeclarada() {
  console.log(`Hiciste click en el botón con función declarada! 🥑`


  )};



/* 


2.  Evento con función anónima

La función se escribe dentro del evento y no tiene un nombre asignado.

Sintaxis:

target.addEventListener( trigger, function() { // código a ejecutar } )


*/


const anonima = document.getElementById(`anonima`);

// Evento con función anonima 

anonima.addEventListener(`click`, function() {
 console.log(`Hiciste click en el botón con función anonima! 🥓`)
});


/* 

3. Evento con Función Flecha

Esta función se escribe también dentro del evento, no tienen
nombre y es más conocida.


Sintaxis: 

target.addEventListener( trigger, ( ) => {  // Código que se ejecuta  } )


*Si el código que se ejecuta solo tiene 1 línea,  se debe escribir entrer las llaves.

*Si el código que se ejecuta solo tiene 1 línea, se pueden omitir las llaves.



*/


// Referencia 

const flecha = document.getElementById(`flecha`);

// Evento con función flecha

flecha.addEventListener(`click`, ( ) => console.log(`Hiciste click en el botón con función flecha! 🧄` ) );

