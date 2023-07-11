// ROPA

const ropa = [
    // Mujer
    {
        id: "mujer-01",
        titulo: "Blusa Rosa",
        imagen: "./mujer/blusarosa.jpg",
        categoria: {
            nombre: "Blusa",
            id: "mujer"
        },
        precio: 20
    },
    {
        id: "mujer-02",
        titulo: "Camisa",
        imagen: "./mujer/camisa2.jpg",
        categoria: {
            nombre: "Camisa",
            id: "mujer"
        },
        precio: 30
    },
    {
        id: "mujer-03",
        titulo: "Camisa larga",
        imagen: "./mujer/camisalarga.jpg",
        categoria: {
            nombre: "Blusa",
            id: "mujer"
        },
        precio: 40
    },
    {
        id: "mujer-04",
        titulo: "Deportes",
        imagen: "./mujer/deportes.jpg",
        categoria: {
            nombre: "deporte",
            id: "mujer"
        },
        precio: 50
    }
    
];
//Funcion global de muestra
const contentproduct = document.querySelector("#contentproduct");
function cargarProductos(){
    ropa.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" height="400px">
        <div class="card-body">
            <h5 class="card-title">${producto.titulo}</h5>
            <p class="card-text">${producto.precio}€</p>
            <button class="btn btn-primary" id="${producto.id}">Comprar</button>
        </div>`;

        contentproduct.append(div);
    })
}

cargarProductos();

// Funcion de precio ascendente
