const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function tim(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(seg < 10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg
})

//data 

const dataAtual = new Date();
const dia = String(dataAtual.getDate()).padStart(2, '0');
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); 
const ano = dataAtual.getFullYear();


const diaFormatada = `${dia}`;
document.getElementById('dia').textContent = diaFormatada;

const mesFormatada = `${mes}`;
document.getElementById('mes').textContent = mesFormatada;

const anoFormatada = `${ano}`;
document.getElementById('ano').textContent = anoFormatada;

