const circuitos = [
  { id: 1, nombre: "Circuito del Sol", longitud: 3800 },
  { id: 2, nombre: "Autódromo Sierra Verde", longitud: 5200 },
  { id: 3, nombre: "Pista Mar de Plata", longitud: 4600 },
  { id: 4, nombre: "Circuito Las Dunas", longitud: 6100 },
  { id: 5, nombre: "Ruta del Dragón", longitud: 7400 },
  { id: 6, nombre: "Velódromo Horizonte", longitud: 2900 },
  { id: 7, nombre: "Circuito Monte Rojo", longitud: 5700 },
  { id: 8, nombre: "Pista Laguna Seca 2", longitud: 4000 },
  { id: 9, nombre: "Autódromo Nevado", longitud: 6800 },
  { id: 10, nombre: "Circuito Bahía Oscura", longitud: 3400 }
];


export const getAllTracks = () => {
    const aux = [...circuitos]
return aux;
}


export const getTrackById = (trackId) => {
    const aux = circuitos.find((t)=> t.id === Number(trackId))
    return aux
}