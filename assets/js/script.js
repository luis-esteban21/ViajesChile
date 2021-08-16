//Funcion que cambia color con scroll 

$(window).scroll(function(){

    if ($(this).scrollTop() > 400) {
        $("#barra").removeClass("navbar");
       $('#barra').addClass(".desplazamiento");
      } else {
    
       $("#barra").removeClass(".desplazamiento");
       $('#barra').addClass("navbar");
      }

   });

      //$(document).ready(function() {
    //$('[data-toggle="tooltip"]').tooltip()
  //})

const icono = document.querySelector('#icono');
const tooltip = document.querySelector('#tooltip');


const calcularPosicionTooltip = () => {

const icono2 = document.querySelector('#icono2');
const tooltip2 = document.querySelector('#tooltip2')};
const icono3 = document.querySelector('#icono3');
const tooltip3 = document.querySelector('#tooltip3')



	// Calculamos las coordenadas del icono.
	const x = icono.offsetLeft;
	const y = icono.offsetTop;
  const a = icono2.offsetLeft;
	const b = icono2.offsetTop;
  const c = icono3.offsetLeft;
	const d = icono3.offsetTop;


	// Calculamos el tamaño del tooltip.
	const anchoTooltip = tooltip.clientWidth;
	const altoTooltip = tooltip.clientHeight;
  const anchoTooltip2 = tooltip2.clientWidth;
	const altoTooltip2 = tooltip2.clientHeight;
  const anchoTooltip3 = tooltip3.clientWidth;
	const altoTooltip3 = tooltip3.clientHeight;

	// Calculamos donde posicionaremos el tooltip.
	const izquierda = x - (anchoTooltip / 2) + 15;
	const arriba = y - altoTooltip - 20;

	tooltip.style.left = `${izquierda}px`;
	tooltip.style.top = `${arriba}px`;


const izquierda2 = a - (anchoTooltip2 / 2) + 35;
const arriba2 = b - altoTooltip2 - 30;

tooltip2.style.left = `${izquierda2}px`;
tooltip2.style.top = `${arriba2}px`;

const izquierda3 = c - (anchoTooltip3 / 2) + 35;
const arriba3 = d - altoTooltip3 - 30;

tooltip3.style.left = `${izquierda3}px`;
tooltip3.style.top = `${arriba3}px`;


window.addEventListener('load', () => calcularPosicionTooltip());
window.addEventListener('resize', () => calcularPosicionTooltip());

icono.addEventListener('mouseenter', () => {
	tooltip.classList.add('activo');
	calcularPosicionTooltip();
});

icono2.addEventListener('mouseenter', () => {
	tooltip2.classList.add('activo');
	calcularPosicionTooltip();
});

icono3.addEventListener('mouseenter', () => {
	tooltip3.classList.add('activo');
	calcularPosicionTooltip();
});

let timer;
icono.addEventListener('mouseleave', () => {
	timer = setTimeout(() => {
		tooltip.classList.remove('activo');
	}, 500);
});

let timer2;
icono2.addEventListener('mouseleave', () => {
	timer2 = setTimeout(() => {
		tooltip2.classList.remove('activo');
	}, 500);
});

let timer3;
icono2.addEventListener('mouseleave', () => {
	timer3 = setTimeout(() => {
		tooltip3.classList.remove('activo');
	}, 500);
});

tooltip.addEventListener('mouseenter', () => clearTimeout(timer));
tooltip.addEventListener('mouseleave', () => tooltip.classList.remove('activo'));
tooltip2.addEventListener('mouseenter', () => clearTimeout(timer2));
tooltip2.addEventListener('mouseleave', () => tooltip2.classList.remove('activo'));
tooltip3.addEventListener('mouseenter', () => clearTimeout(timer3));
tooltip3.addEventListener('mouseleave', () => tooltip3.classList.remove('activo'));



