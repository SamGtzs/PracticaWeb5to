const $btnCompra = document.querySelector("#btn-compra");
const $loader = document.querySelector("#loader");
const $finalizarMensaje = document.querySelector("#mensaje-compra");
let carrito = {}; 

document.addEventListener("click", function (e) {
    // Sumar producto
    if (e.target.matches(".btn-sumar")) {
        const producto = e.target.closest(".producto");
        let id = producto.getAttribute("data-id");
        let nombre = producto.getAttribute("data-nombre");
        let precio = parseFloat(producto.getAttribute("data-precio"));

        if (!carrito[id]) {
            carrito[id] = { nombre, precio, cantidad: 0 };
        }

        carrito[id].cantidad++;
        actualizarCarrito();
        actualizarBotones();
    }

    // Restar producto
    if (e.target.matches(".btn-restar")) {
        const producto = e.target.closest(".producto");
        let id = producto.getAttribute("data-id");

        if (carrito[id]) {
            carrito[id].cantidad--;
            if (carrito[id].cantidad <= 0) {
                delete carrito[id];
            }
        }
        actualizarCarrito();
        actualizarBotones();
    }
});

// Actualizar el carrito
function actualizarCarrito() {
    const listaCarrito = document.querySelector("#lista-carrito");
    const totalCarrito = document.querySelector("#total-carrito");
    const btnCompra = document.querySelector("#btn-compra");
    listaCarrito.innerHTML = "";
    let total = 0;
    let tieneProductos = false;

    Object.keys(carrito).forEach((id) => {
        const item = carrito[id];
        const itemCarrito = document.createElement("li");
        itemCarrito.innerText = `${item.nombre} - ${item.cantidad} unidades - $${(item.precio * item.cantidad).toFixed(2)}`;
        listaCarrito.appendChild(itemCarrito);
        total += item.precio * item.cantidad;
        tieneProductos = true;
    });

    totalCarrito.innerText = total.toFixed(2);

    if (tieneProductos) {
        btnCompra.disabled = false;
    } else {
        btnCompra.disabled = true;
    }
}

// Actualizar botones de restar
function actualizarBotones() {
  document.querySelectorAll(".producto").forEach((producto) => {
      let id = producto.getAttribute("data-id");
      const btnRestar = producto.querySelector(".btn-restar");

      if (!carrito[id] || carrito[id].cantidad === 0) {
          btnRestar.disabled = true;
      } else {
          btnRestar.disabled = false;
      }
  });
}



$btnCompra.addEventListener("click", function(){
  $loader.classList.remove("hidden");

  setTimeout(function () {
    $loader.classList.add("hidden"); // Ocultamos el loader

    // Mostramos el mensaje de éxito (animación de "chiquito a grande")
    $finalizarMensaje.remove("hidden");
    if ($finalizarMensaje.classList == "hidden")
    {
      console.log("aparece el mensaje");
    }
    $finalizarMensaje.classList.add("grande");

    setTimeout(function () {
        // Cambiamos la animación a "grande a chiquito" después de 5 segundos
        $finalizarMensaje.classList.remove("grande");
        $finalizarMensaje.classList.add("chico");

        setTimeout(function () {
            // Ocultamos el mensaje de éxito después de que la animación de "chico" termina
            $finalizarMensaje.classList.add("hidden");
            $finalizarMensaje.classList.remove("chico");
        }, 500); // Duración de la animación de "grande a chico"
    }, 5000); // Tiempo que el mensaje de éxito está visible
}, 5000); // Tiempo de espera antes de mostrar el mensaje de éxito
})

