const day =         document.querySelector('#day');
const month =       document.getElementById('month');
const year =        document.getElementById('year');
const outYears =    document.querySelector('.out-years');
const outMonths =   document.querySelector('.out-months');
const outDays =     document.querySelector('.out-days');
const pYear =       document.querySelector('.p-year');
const pMonth =      document.querySelector('.p-month');
const pDay =        document.querySelector('.p-day');
const errorYear =   document.querySelector('.error-year');
const errorMonth =  document.querySelector('.error-month');
const errorDay =    document.querySelector('.error-day');

const submit = document.querySelector('.submit');
let fechaActual = new Date();
let fechaInput; 
let diferencia;
let milisegundosEnDia = 1000 * 60 * 60 * 24;

//Escuchando el evento click en SUBMIT
submit.addEventListener('click', ()=>{
  //Borrando todas las alertas de error
  pDay.classList.remove('active');
  pMonth.classList.remove('active');
  pYear.classList.remove('active');
  errorDay.style.display = "none";
  errorMonth.style.display = "none";
  errorYear.style.display = "none";
  day.classList.remove('active');
  month.classList.remove('active');
  year.classList.remove('active');
  //SI el valor de "dia" es menor a 1 o mayor a 31
  if (day.value < 1 || day.value > 31) {
    //Activar alertas de error
    pDay.classList.add('active');
    errorDay.style.display = "block";
    day.classList.add('active');
    console.log('error');
    outYears.innerHTML = '--';
    outMonths.innerHTML = '--';
    outDays.innerHTML = '--';
    return
  } else {
    calcularFecha()
  }
  //Si el mes es menor a 1 o mayor a 12
  if (month.value < 1 || month.value > 12) {
    //activar las alertas de error
    pMonth.classList.add('active');
    errorMonth.style.display = "block";
    month.classList.add('active');
    console.log('error');  
    outYears.innerHTML = '--';
    outMonths.innerHTML = '--';
    outDays.innerHTML = '--';
    return
  } else {
    calcularFecha()
  }
  //SI el año es menor al año actual
  if (year.value > fechaActual.getFullYear()) {
    //Activar alertas de error
    pYear.classList.add('active');
    errorYear.style.display = "block";
    year.classList.add('active');
    console.log(fechaActual.getFullYear());
    outYears.innerHTML = '--';
    outMonths.innerHTML = '--';
    outDays.innerHTML = '--';
  } else {
    calcularFecha()
  }

  function calcularFecha() {
    //Convertimos los valores de los INPUTS a una fecha y la asignamos a "fechaInput"
    fechaInput = new Date(year.value, month.value - 1, day.value);
    //Encontramos la diferencia en milisegundos entre "fechaActual" y "fechaInput"
    diferencia = fechaActual.getTime() - fechaInput.getTime();
    //Obtenemos cuantos dias son los milisegundos en "diferencia"
    let dias = Math.floor(diferencia/milisegundosEnDia);
    //Obtenemos cuantos años hay en "diferencia"
    let años = Math.floor(dias / 365);
    //imprimir cantidad de años
    outYears.innerHTML = años;
    //Obtenemos cuantos meses hay en diferencia
    let meses = Math.floor(dias/ 30.41);
    //Le restamos a meses la cantidad de meses que entan englobados en "años"
    let mesesRestantes = Math.floor(meses - (años * 12));
    //Imprimimos cantidad de meses
    outMonths.innerHTML = mesesRestantes;
    //Obtenemos la catidad de dias descontando los dias ocupados por "meses"
    let diasRestantes = Math.floor(dias - (meses * 30.41))
    //Imprimimos cantidd de dias
    outDays.innerHTML = diasRestantes;
  }
})
