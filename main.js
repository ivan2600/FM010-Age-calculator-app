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


submit.addEventListener('click', ()=>{
  pDay.classList.remove('active');
  pMonth.classList.remove('active');
  pYear.classList.remove('active');
  errorDay.style.display = "none";
  errorMonth.style.display = "none";
  errorYear.style.display = "none";
  day.classList.remove('active');
  month.classList.remove('active');
  year.classList.remove('active');

  if (day.value < 1 || day.value > 31) {
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
  if (month.value < 1 || month.value > 12) {
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
  if (year.value > fechaActual.getFullYear()) {
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
    fechaInput = new Date(year.value, month.value - 1, day.value);
  console.log(fechaInput);
  
  diferencia = fechaActual.getTime() - fechaInput.getTime();
  
  let dias = Math.floor(diferencia/milisegundosEnDia);
  let años = Math.floor(dias / 365);
  console.log('años: ' + años);
  outYears.innerHTML = años;
  let meses = Math.floor(dias/ 30.41);
  let mesesRestantes = Math.floor(meses - (años * 12));
  console.log('meses: ' + mesesRestantes);
  outMonths.innerHTML = mesesRestantes;
  let diasRestantes = Math.floor(dias - (meses * 30.41))
  console.log('dias: ' + diasRestantes);
  outDays.innerHTML = diasRestantes;
  }
  
})

//
