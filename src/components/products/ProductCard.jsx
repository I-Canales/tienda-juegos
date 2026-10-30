import { Button, Card } from "react-bootstrap";
import { useApp } from "../../context/AppContext";

export const formatearPrecio = (precio) => `$${precio.toLocaleString("es-CL")}`;

function ProductCard({ producto }) {
  const { agregarAlCarrito } = useApp();

  return (
    <Card className="h-100 text-center">
      <Card.Img
        variant="top"
        src={producto.imagen}
        alt={producto.nombre}
        style={{ height: 160, objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3" className="h5">{producto.nombre}</Card.Title>
        <Card.Text className="text-success fw-bold">{formatearPrecio(producto.precio)}</Card.Text>
        <Button className="mt-auto" onClick={() => agregarAlCarrito(producto.id)}>
          Añadir al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
