import "./App.css";
import CabeceraTiendaComponent from "./components/CabeceraTiendaComponent";

function App() {
  const tituloTienda = "Librería React de Víctor Jesús Parras Rumbado";

  const data = [
    {
      id: 1,
      title: "Libro 1",
      description: "Descripcion del libro 1",
      price: 10,
      IVA: 2,
      premium: true,
    },
    {
      id: 2,
      title: "Libro 2",
      description: "Descripcion del libro 2",
      price: 15,
      IVA: 2,
      premium: false,
    },
    {
      id: 3,
      title: "Libro 3",
      description: "Descripcion del libro 3",
      price: 20,
      IVA: 2,
      premium: true,
    },
    {
      id: 4,
      title: "Libro 4",
      description: "Descripcion del libro 4",
      price: 20,
      IVA: 4,
      premium: false,
    },
  ];
  return (
    <>
      <div>
        <h1>{tituloTienda}</h1>
      </div>
      <CabeceraTiendaComponent/>
      <div>
        {data.map((libro, idx) => (
          <div key={idx} className="single-book-container">
            <p className="book-title">Título: {libro.title}</p>
            <p className="book-description">Descripción: {libro.description}</p>
            <p className="book-price">Precio: {libro.price}</p>
            <p className="book-total-price">Precio Total: {libro.price + libro.IVA}</p>
            <p className="book-iva">IVA: {libro.IVA}</p>
            <p className="book-premium">Premium: {libro.premium ? "Sí": "No"}</p>
            <hr />
          </div>
        ))}
      </div>
      <div>
        {data.map((elem, idx) => {
          const precioConIva = elem.price + elem.IVA;
          return (
            <div key={idx} className="single-book-container">
              <p className="book-title">Título {elem.title}</p>
              <p className="book-description">Descripción {elem.description}</p>
              <p className="book-price">Precio con iva {precioConIva}</p>
              <p className="book-iva">IVA {elem.IVA}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
