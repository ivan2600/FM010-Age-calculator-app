const day =         document.querySelector('#day');
const month =       document.getElementById('month');
const year =        document.getElementById('year');
const outYears =    document.querySelector('.out-years');
const outMonths =   document.querySelector('.out-months');
const outDays =     document.querySelector('.out-days');

const submit = document.querySelector('.submit');
let fechaActual = new Date();
let fechaInput; 
let diferencia;
let milisegundosEnDia = 1000 * 60 * 60 * 24;


submit.addEventListener('click', ()=>{
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
})

//
