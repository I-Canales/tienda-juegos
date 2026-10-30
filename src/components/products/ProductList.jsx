import { Col, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

function ProductList({ productos }) {
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-3">
      {productos.map((producto) => (
        <Col key={producto.id}>
          <ProductCard producto={producto} />
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;
