/* Array con todos los autos */
const autos = [
    {id: 1, nombre: "Audi A3", imagen: "assets/nobles-y-deportivos/audi-a3.png", seccion: "nobles"},
    {id: 2, nombre: "Chevrolet Cruze", imagen: "assets/nobles-y-deportivos/chevrolet-cruze.png", seccion: "nobles"},
    {id: 3, nombre: "Fiat Cronos", imagen: "assets/nobles-y-deportivos/fiat-kronnos.png", seccion: "nobles"},
    {id: 4, nombre: "Nissan Sentra", imagen: "assets/nobles-y-deportivos/nissan-sentra.png", seccion: "nobles"},
    {id: 5, nombre: "Toyota Corolla", imagen: "assets/nobles-y-deportivos/toyota-corolla.png", seccion: "nobles"},
    {id: 6, nombre: "VolksWagen Golf", imagen: "assets/nobles-y-deportivos/volkswagen-golf.png", seccion: "nobles"},
    {id: 7, nombre: "Aston Martin DB11", imagen: "assets/premiums-y-superdeportivos/aston-martin-db11.png", seccion: "premiums"},
    {id: 8, nombre: "Audi R8", imagen: "assets/premiums-y-superdeportivos/audi-r8.png", seccion: "premiums"},
    {id: 9, nombre: "Chevrolet Corvette", imagen: "assets/premiums-y-superdeportivos/chevrolet-corvette.png", seccion: "premiums"},
    {id: 10, nombre: "Ford Mustang", imagen: "assets/premiums-y-superdeportivos/ford-mustang.png", seccion: "premiums"},
    {id: 11, nombre: "Mercedes Benz AMG", imagen: "assets/premiums-y-superdeportivos/mercedes-benz-amg.png", seccion: "premiums"},
    {id: 12, nombre: "Porsche 911", imagen: "assets/premiums-y-superdeportivos/porsche-911.png", seccion: "premiums"}
];


/* Función para crear las cards de los autos:
    - Recibe por parámetro el id del contenedor y la lista de los autos.
    - Cuando se invoca la función, se filtra la sección del auto para ver si pertenece a los "premiums" o a los "nobles".
    - Se usa un bucle forEach() para crear cada card, concatenando el contenido para crear todas, usando estilos de Bootstrap.*/
function armarCards(idContenedor, listaAutos) {
    const contenedor = document.getElementById(idContenedor);
    let html = "";

    listaAutos.forEach(function (auto) {
        html += `
            <div class="col">
                <div class="card tarjeta-auto h-100">
                    <img src="${auto.imagen}" class="card-img-top" alt="${auto.nombre}">
                    <div class="card-body">
                        <h3 class="card-title">${auto.nombre}</h3>
                    </div>
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = html;
}

armarCards("cards-premium", autos.filter(auto => auto.seccion === "premiums"));
armarCards("cards-nobles", autos.filter(auto => auto.seccion === "nobles"));