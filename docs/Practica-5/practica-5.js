// Instrucción 1
let productos = [
    { nombre: "Camiseta", precio: 15, stock: 10 },
    { nombre: "Pantalones", precio: 25, stock: 8 },
    { nombre: "Zapatos", precio: 50, stock: 5 },
    { nombre: "Sombrero", precio: 10, stock: 20 },
    ];
  
  // Instrucción 2
let carrito = [];
  
  function agregarAlCarrito(productoNombre, cantidad) {
    for (let producto of productos) {
      if (producto.nombre === productoNombre) {
        if (producto.stock >= cantidad) {
          carrito.push({
            nombre: productoNombre,
            cantidad: cantidad,
            precio: producto.precio,
          });
  
          producto.stock -= cantidad;
          console.info(`${cantidad} ${productoNombre}(s) agregado(s) al carrito`);
        } else {
          console.error(`No hay suficiente stock de ${productoNombre}`);
        }
        return;
      }
    }
    console.error(`El producto "${productoNombre}" no existe.`);
  }

  function eliminarAlCarrito(productoNombre, cantidad){
    for ( let item of carrito) {
        if(productoNombre == item.nombre){
            item.cantidad -= cantidad;
            if(item.cantidad <= 0){
                carrito.splice(carrito.indexOf(item),1);
                console.log(`${productoNombre}, Se ha eliminado completamente del carrito`)
            }
            console.log(` se han eliminado ${cantidad} ${productoNombre},del carrito`)
           }
        }
    }

  // Instrucción 3
  function calcularTotal() {
    let total = 0;
    for (let item of carrito) {
      total += item.precio * item.cantidad;
    }
  
    return total;
  }
  
  // Instrucción 4
  function aplicarDescuento(total) {
    if (total > 100) {
      //Aplica un 10% de descuento
      return total * 0.9;
    }
  
    return total;
  }
  
  //Instrucción 5
  function procesarCompra() {
    console.log("Procesando compra...");
    setTimeout(() =>{
        console.log("Compra completada en 3...")
    }, 2000);
    setTimeout(() =>{
        console.log("Compra completada en 2...")
    }, 4000);
    setTimeout(() =>{
        console.log("Compra completada en 1...")
    }, 6000);
    setTimeout(function () {
      let total = calcularTotal();
      total = aplicarDescuento(total);
      console.log(`Compra completada. Total a pagar: $${total.toFixed(2)}`);
    }, 8000);
  }
  
  // Instrucción 6
  agregarAlCarrito("Pantalones", 3);
  agregarAlCarrito("Pantalones", 4);
  agregarAlCarrito("Pantalones", 4);
  agregarAlCarrito("Zapatos", 2);
  agregarAlCarrito("Camisetas", 3);
  agregarAlCarrito("Camiseta", 3);
  agregarAlCarrito("Pantalones", 2);

  eliminarAlCarrito("Zapatos", 2);
  eliminarAlCarrito("Camiseta", 3);
  

  console.log(carrito);
  procesarCompra();