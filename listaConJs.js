// const padre = document.getElementById('productos');

/** ARRAY DE PRODUCTOS */
const maquinas = [{id: 1, tipo: "Rotativa", modelo: "J4", precio: 10000, img: "assets/img/rotativa1.jpeg"},
{id: 2, tipo: "Rotativa", modelo: "Z4", precio: 9000, img: "./assets/img/rotativa2.jpg"},
{id: 3, tipo: "Rotativa", modelo: "H0", precio: 7500, img: "./assets/img/rotativa3.jpg"},
{id: 4, tipo: "Bobina", modelo: "Esmeralda", precio: 12000, img: "./assets/img/bobina1.jpg"},
{id: 5, tipo: "Bobina", modelo: "León", precio: 6000, img: "./assets/img/bobina2.jpg"},
{id: 6, tipo: "Bobina", modelo: "Control", precio: 5000, img: "./assets/img/bobina3.jpg"},
{id: 7, tipo: "Bobina", modelo: "Dragón", precio: 4500, img: "./assets/img/bobina4.jpg"},
{id: 8, tipo: "Bobina", modelo: "Zona", precio: 8600, img: "./assets/img/bobina5.jpg"},
{id: 9, tipo: "Lápiz", modelo: "B12", precio: 9800, img: "./assets/img/lapiz1.jpg"},
{id: 10, tipo: "Lápiz", modelo: "M11", precio: 13000, img: "./assets/img/lapiz2.jpg"},
{id: 11, tipo: "Rotativa", modelo: "F2", precio: 6700, img: "./assets/img/rotativa4.jpg"},
{id: 12, tipo: "Rotativa", modelo: "F5", precio: 9400, img: "./assets/img/rotativa5.jpg"}];


/** valor del carrito almacenado en storage */

// localStorage.clear();

// function agregarLocalStorage(maquina){

//     const maquinas = localStorage.getItem('maquinas');
    
//     let arrayMaquinas = [];

//     if (maquinas !== null){
//         arrayMaquinas = JSON.parse(maquinas);
//     }
    
//     arrayMaquinas.push(maquina);

//     localStorage.setItem('maquinas', JSON.stringify(arrayMaquinas));
// }


// /* Armado de HTML por medio de DOM */

// maquinas.forEach((maquina) => {
//     const divMaster = document.createElement('div');
//     divMaster.classList.add('cadaProducto')
//     const p = document.createElement('p');
//     p.innerHTML = 'Modelo "' + maquina.modelo + '"';
//     divMaster.appendChild(p);
//     const img = document.createElement('article');
//     img.innerHTML = `<img class="imgProd" src=${maquina.img}>`;
//     divMaster.appendChild(img);
//     const divPrecio = document.createElement('div');
//     divPrecio.classList.add('divPrecio');
//     divMaster.appendChild(divPrecio);
//     const p3 = document.createElement('p');
//     p3.innerHTML = '$'
//     divPrecio.appendChild(p3);
//     const p2 = document.createElement('p');
//     p2.classList.add('precio')
//     p2.innerHTML = parseInt(maquina.precio);
//     divPrecio.appendChild(p2);
//     const divBotones = document.createElement('div');
//     divBotones.classList.add('divBotones');
//     const button = document.createElement('button');
//     button.classList.add('botonCarro');
//     button.innerHTML = 'AGREGAR';
//     divBotones.appendChild(button);
//     const buttonResta = document.createElement('button');
//     buttonResta.classList.add('botonResta');
//     buttonResta.innerHTML = 'QUITAR';
//     divBotones.appendChild(button);
//     divBotones.appendChild(buttonResta);
//     divMaster.appendChild(divBotones);
//     padre.appendChild(divMaster);

//     button.addEventListener('click', () => {
//         agregarLocalStorage(maquina);
        
//         setTimeout(() => {
//             Toastify({
//                 text: "Maquina Agregada",
//                 duration: 2000,
//                 gravity: "bottom",
//                 position: "right",
//                 stopOnFocus: true,
//                 style: {
//                   background: "linear-gradient(to top, rgb(10, 105, 105), rgb(290, 223, 223))",
//                 },
//             }).showToast();
//         }, 500);

//         setTimeout(() => {
        
//         })
//     })
// })

/** Evento de boton para añadir o quitar del carro */

// const agregarAlCarrito = document.querySelectorAll('.botonCarro');
// agregarAlCarrito.forEach(botonAgregarAlCarro => {
//     botonAgregarAlCarro.addEventListener('click', clickParaAgregar);
// });
// const quitarDelCarro = document.querySelectorAll('.botonResta');
// quitarDelCarro.forEach(botonQuitarDelCarro => {
//     botonQuitarDelCarro.addEventListener('click', clickParaQuitar);
// });

/** suma de precios */

// let total = 0;

// let arrayCarro = [];

// function clickParaAgregar(event){
//     const eventoBoton = event.target;
//     const cadaProducto = eventoBoton.closest(('.cadaProducto'))

//     const precio = Number (cadaProducto.querySelector('.precio').textContent);

//     total = total + precio;

//     eventoBoton.addEventListener('click',() => {
//         document.getElementById('carrito').innerHTML = `Total $${total}`;
//         arrayCarro.push(cadaProducto);
//     })
//     console.log(arrayCarro)
// };

/** resta de precios */

// function clickParaQuitar(event){
//     const eventoBoton = event.target;
//     const cadaProducto = eventoBoton.closest(('.cadaProducto'))

//     const precio = Number (cadaProducto.querySelector('.precio').textContent);

//     total = total - precio;

//     eventoBoton.addEventListener('click',() => {
//         if (total >= 0){
//             document.getElementById('carrito').innerHTML = `Total $${total}`;
//         } else {
//             Swal.fire({
//                 title: 'NO SE PUEDE QUITAR',
//                 text: 'No hay nada en el carrito',
//                 icon: 'error',
//                 showConfirmButton: false,
//                 timer: 1300
//             }) 
//         };
//         console.log(total);
//     })
// };

/** vaciado de carrito */

// const botonVaciar = document.getElementById('botonVaciar');
// botonVaciar.addEventListener('click', () =>{
//     document.getElementById('carrito').innerHTML = 'Carrito vacío!';
//     total = 0;
//     localStorage.clear();
//     Swal.fire({
//         title: 'LISTO!',
//         text: 'Carrito vaciado con éxito',
//         icon: 'success',
//         confirmButtonText: 'OK'
//     })
// });
