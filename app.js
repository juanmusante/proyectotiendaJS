const padreFetch = document.getElementById('productos');

let arrayMaquinas = []

fetch("/productos.json").then( (response) => {
    return response.json();
}).then( (maquinas) => {
    maquinas.forEach((maquina) => {
        const divMaster = document.createElement('div');
        divMaster.classList.add('cadaProducto')
        const p = document.createElement('p');
        p.classList.add('modelo');
        p.innerHTML = 'Modelo "' + maquina.modelo + '"';
        divMaster.appendChild(p);
        const img = document.createElement('article');
        img.classList.add('imagen');
        img.innerHTML = `<img class="imgProd" src=${maquina.img}>`;
        divMaster.appendChild(img);
        const divPrecio = document.createElement('div');
        divPrecio.classList.add('divPrecio');
        divMaster.appendChild(divPrecio);
        const p3 = document.createElement('p');
        p3.innerHTML = '$'
        divPrecio.appendChild(p3);
        const p2 = document.createElement('p');
        p2.classList.add('precio')
        p2.innerHTML = parseInt(maquina.precio);
        divPrecio.appendChild(p2);
        const divBotones = document.createElement('div');
        divBotones.classList.add('divBotones');
        const button = document.createElement('button');
        button.classList.add('botonCarro');
        button.innerHTML = 'AGREGAR';
        divBotones.appendChild(button);
        divBotones.appendChild(button);
        divMaster.appendChild(divBotones);
        padreFetch.appendChild(divMaster);
    
        button.addEventListener('click', () => {
            agregarLocalStorage(maquina);
            
            setTimeout(() => {
                Toastify({
                    text: "Maquina Agregada",
                    duration: 2000,
                    gravity: "bottom",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                      background: "linear-gradient(to top, rgb(10, 105, 105), rgb(290, 223, 223))",
                    },
                }).showToast();
            }, 500);
    
            setTimeout(() => {
            
            })
        })
    })

    /** valor del carrito almacenado en storage */
    function agregarLocalStorage(maquina){
        const maquinas = localStorage.getItem('maquinas');

        if (maquinas !== null){
            arrayMaquinas = JSON.parse(maquinas);
        }

        arrayMaquinas.push(maquina);

        localStorage.setItem('maquinas', JSON.stringify(arrayMaquinas));

    };

    /** Evento de boton para añadir o quitar del carro */
    const agregarAlCarrito = document.querySelectorAll('.botonCarro');
    agregarAlCarrito.forEach(botonAgregarAlCarro => {
        botonAgregarAlCarro.addEventListener('click', clickParaAgregar);
    });

    const quitarDelCarro = document.querySelectorAll('.botonResta');
    quitarDelCarro.forEach(botonQuitarDelCarro => {
        botonQuitarDelCarro.addEventListener('click', clickParaQuitar);
    });

    /** Finalizar compra */
    const botonFinalizarCompra = document.querySelector('.botonFinal');
    botonFinalizarCompra.addEventListener('click', finalizarCompra)

    /** Agregar al carrito */
    function clickParaAgregar(event){
        const eventoBoton = event.target;
        const cadaProducto = eventoBoton.closest('.cadaProducto');

        const modeloProducto = cadaProducto.querySelector('.modelo').textContent;
        const precioProducto = cadaProducto.querySelector('.precio').textContent;

        agregarProductosAlCarro(modeloProducto, precioProducto);
    };

    /** Visualización de carrito */
    const vistaCarrito = document.getElementById('vistaCarrito');
    
    function agregarProductosAlCarro(modeloProducto, precioProducto){
        const divCarritoRow = document.createElement('div');
        const contenidoCarrito = `
        <div class="row itemsCarro">
            <p class="fuenteProducto producto items">${modeloProducto}</p>
            <p class="fuenteProducto precio items">$${precioProducto}</p>
            <button class="botonResta cruz" type="button">X</button>
        </div>`;
        divCarritoRow.innerHTML = contenidoCarrito;
        vistaCarrito.append(divCarritoRow)

        divCarritoRow.querySelector('.botonResta').addEventListener('click', clickParaQuitar);

        actualizacionTotalDelCarrito();
    }

    /** suma de precios */
    function actualizacionTotalDelCarrito(){
        let total = 0;

        const totalDelCarrito = document.getElementById('carrito');

        const itemsDelCarrito = document.querySelectorAll('.itemsCarro');

        itemsDelCarrito.forEach(contenidoCarrito => {
            const precioCadaProducto = contenidoCarrito.querySelector('.precio');
            const precioProducto = Number (precioCadaProducto.textContent.replace('$', ''));
            
            total = total + precioProducto;
        });

        totalDelCarrito.innerHTML = `Total $${total}`;
    }

    /** Eliminar productos */
    function clickParaQuitar(event){
        const eventoBoton = event.target;
        eventoBoton.closest('.itemsCarro').remove();
        actualizacionTotalDelCarrito();
    };

    /** Fin de la compra */
    function finalizarCompra(){
        localStorage.clear();
        vistaCarrito.innerHTML = '';
        actualizacionTotalDelCarrito()
        Swal.fire({
            title: 'Felicitaciones!',
            text: 'Su compra fue realizada con éxito',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    };
});
