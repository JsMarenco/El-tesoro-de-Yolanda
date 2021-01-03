function get__RandomNumber (size) {
  return Math.floor(Math.random() * size);
}

let get__Distance = (e, target) => {
  let diffx = e.offsetX - target.x;
  let diffy = e.offsetY - target.y;
  return Math.sqrt((diffx * diffx) + (diffy * diffy));
}

let get__Distance__treasure = distance => {
  if(distance < 30) {
    return "Estas muy cerca"
  }
  else if (distance < 40) {
    return "Estás cerca"
  }
  else if (distance < 60) {
    return "Ya casi"
  }
  else if (distance < 100) {
    return "Sigue buscando"
  }
  else if (distance < 150) {
    return "Busca un poco más"
  }
  else {
    return "Estás demasiado lejos"
  }
}

const WIDTH = 400
const HEIGH = 400

let target = {
  x: get__RandomNumber(WIDTH),
  y: get__RandomNumber(HEIGH)
}

let $map = document.getElementById("treasure__map")
let $output = document.getElementById("treasure__output")
let click = 0

$map.addEventListener('click', function (e) {
  click++
  let distance = get__Distance(e, target)
  let treasure = get__Distance__treasure(distance)
  $output.innerHTML= treasure
  if (distance < 20) {
    alert(`Has encontrado el tesoro en ${click} clicks!`)
  }
})



