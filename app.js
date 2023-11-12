const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const diasDeLaSemana = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sábado",
  ];

  const mensaje = document.querySelector(".mensaje");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let fechaBalotaje = new Date (2023,10,19,21,0,0);

const año = fechaBalotaje.getFullYear();
const hora = fechaBalotaje.getHours();
const minutos = fechaBalotaje.getMinutes();
let mes = meses[fechaBalotaje.getMonth()];
let dia = fechaBalotaje.getDate();
let diaSemana = diasDeLaSemana[fechaBalotaje.getDay()];

mensaje.textContent = `El ${diaSemana} ${dia} de ${mes} a las ${hora} horas del ${año} los argentinos sabrán quién será el próximo presidente`

//Pasamos la fecha del balotaje a ms

let balotajeMs = fechaBalotaje.getTime();

function tiempoRestante(){
    const hoy = new Date().getTime();
    const t = balotajeMs - hoy;

    const unDia = 24*60*60*1000;
  const unaHora = 60*60*1000;
  const unMinuto = 60*1000

  let dias = t/unDia;
  dias = Math.floor(dias);
  let horas = Math.floor((t%unDia)/unaHora);
  let minutos = Math.floor((t%unaHora)/unMinuto);
  let segundos = Math.floor((t%unMinuto)/1000);

  const values = [dias,horas,minutos,segundos];

  function format (item){
    if (item<10){
      return (item = `0${item}`)
    }
    return item;
  }

  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  });
  if (t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> El balotaje ha concluido</h4>`
  }
};

let countdown = setInterval(tiempoRestante,1000);

tiempoRestante();