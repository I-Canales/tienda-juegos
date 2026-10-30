const img = (nombre) => `${process.env.PUBLIC_URL}/Imagenes/${nombre}`;

export const listaProductos = [
  { id: 1, nombre: "The Last of Us", precio: 12000, imagen: img("thelast.png") },
  { id: 2, nombre: "God Of War", precio: 12000, imagen: img("gow.png") },
  { id: 3, nombre: "Call Of Duty", precio: 15000, imagen: img("call.png") },
  { id: 4, nombre: "Helldivers", precio: 28000, imagen: img("hell.png") },
  { id: 5, nombre: "GTAVI", precio: 90000, imagen: img("gta.png") },
];

export const listaProductosCarreras = [
  { id: 6, nombre: "Need For Speed", precio: 60000, imagen: img("need.png") },
  { id: 7, nombre: "Gran Turismo", precio: 22000, imagen: img("granturismo.png") },
  { id: 8, nombre: "Forza Horizon", precio: 35000, imagen: img("forza.png") },
  { id: 9, nombre: "F1", precio: 45000, imagen: img("f1.png") },
  { id: 10, nombre: "Burnout", precio: 8000, imagen: img("burnout.png") },
];

export const todosLosProductos = listaProductos.concat(listaProductosCarreras);

export const destacados = [
  { id: "d1", nombre: "Pokemon Rojo Fuego", imagen: img("pokemon.png"), precioAnterior: "15.000$", precioActual: "13.900$" },
  { id: "d2", nombre: "PUBG", imagen: img("pubg.png"), precioAnterior: "25.000$", precioActual: "11.760$" },
  { id: "d3", nombre: "Monster Hunter", imagen: img("mostro.png"), precioAnterior: "27.000$", precioActual: "22.400$" },
];
