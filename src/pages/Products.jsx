import { Container } from "react-bootstrap";
import ProductList from "../components/products/ProductList";
import { todosLosProductos } from "../data/juegos.mock";

function Products() {
  return (
    <Container className="mt-4">
      <h1>Nuestros Videojuegos</h1>
      <ProductList productos={todosLosProductos} />
    </Container>
  );
}

export default Products;
