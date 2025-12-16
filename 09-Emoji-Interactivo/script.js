// Referencia del emoji del cursor

const cursor = document.querySelector(".cursor");

// Detectamos el evento del movimiento del mouse

document.addEventListener("mousemove" , (e) => {
  //console.log(e.clientX);
  //console.log(e.clientY);

  // Guardamos los datos en una variable
  let mouseX = e.clientX - 12;
  let mouseY = e.clientY - 12;

 cursor.style.left = `${mouseX}px`;
 cursor.style.top = `${mouseY}px`;



} )


// Detectar el evento de presionar una tecla

document.addEventListener("keydown" , (e) => {
  // console.log(e.key);
  /* Usar switch para asignar el emoji al mouse */

  switch (e.key) {
    case "1":
     cursor.textContent = "🎅";
     document.body.style.backgroundColor = "rgba(255, 123, 0, 0.73)";
      break;
    case "2":
       cursor.textContent = "🕵️‍♀️";
       document.body.style.backgroundColor = "rgba(0, 238, 255, 0.73)";
       break;
      case "3":
       cursor.textContent = "🚂";
       document.body.style.backgroundColor = "rgba(174, 0, 255, 0.73)";
       break;
      case "4":
       cursor.textContent = "🗻";
       document.body.style.backgroundColor = "rgba(255, 8, 49, 0.73)";
       break;
     default:
       cursor.textContent = "🏴‍☠️";
       document.body.style.backgroundColor = "rgba(34, 255, 0, 0.73)";
  }
})