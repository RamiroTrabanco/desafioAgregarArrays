class Productos {
    constructor (nombre, precio, stock) {
        this.nombre = prompt("Ingrese nombre del producto:")
        this.precio = parseInt(prompt("Ingrese precio del producto:"))
        this.stock = parseInt(prompt("Ingrese stock del producto:"))
    }
}

class ProductosStock {
    constructor (nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

const monitorLg19 = new ProductosStock("Monitor LG 19'", 20000, 100)
const gpuNvidia3060 = new ProductosStock("Placa De Video PALIT 3060 12 Gb", 120000, 10)
const proceAMD5600x = new ProductosStock("Procesador AMD Ryzen 5 5600x", 40000, 200)

const productos = [monitorLg19, gpuNvidia3060, proceAMD5600x]

function agregarProducto() {
    productos.push(new Productos())
}

function eliminarProducto() {
    let aEliminar = prompt("Ingrese el producto a quitar del listado:")
    let indice = productos.indexOf(aEliminar)
    let resultadoEliminar = productos.splice(indice, 1)
    console.log("Se ha eliminado el producto:", resultadoEliminar)  
}