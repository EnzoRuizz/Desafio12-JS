$(document).ready( () => {
    console.log("El DOM esta listo");
}) 

const carrito = []

const productos = [
    {
        nombre: "Zapatillas",
        id: 1,
        precio: 2000
    },
    {
        nombre: "Pantalon",
        id: 2,
        precio: 2000
    },
    {
        nombre: "Remera XL",
        id: 3,
        precio: 2000
    },
    {
        nombre: "Cinturon",
        id: 4,
        precio: 2000
    },
]

const agregarAlCarrito = (prodId) => {
    const producto = productos.find( el => el.id === prodId)
    carrito.push(producto)

    console.log(carrito)
}


productos.forEach((prod) => {

    $('#contenedor').append(`
            <h2>${prod.nombre}</h2>
            <h3>Precio: $${prod.precio}</h3>
            <h3>Código: ${prod.id}</h3> <br>
            <button id="agregar${prod.id}" class="btn btn-primary my-2">Agregar al carrito</button>
            <hr>
    `)

    $(`#agregar${prod.id}`).on('click', () => {
        agregarAlCarrito(prod.id)
        console.log(`agregaste ${prod.nombre}`);
    })
})

console.log(carrito);