import { createContext, useContext, useState } from "react";
import { todosLosProductos } from "../data/juegos.mock";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (id) => {
    const producto = todosLosProductos.find((p) => p.id === id);
    if (producto) setCarrito((actual) => [...actual, producto]);
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <AppContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp debe usarse dentro de AppProvider");
  return ctx;
}

export default AppContext;
