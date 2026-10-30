import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useApp } from "../context/AppContext";
import { destacados } from "../data/juegos.mock";

function Home() {
  const { carrito } = useApp();

  return (
    <Container className="mt-4">
      <h1>Bienvenido a nuestra tienda de Juegos</h1>

      <Button className="my-3" title="Boton">
        Carrito de compras ({carrito.length})
      </Button>

      <h2>Nuestra historia</h2>
      <p>
        En 1987, José Antonio decidió comenzar un emprendimiento personal llamado "El Dardo Loco",
        con la idea de brindarle risas y diversión a las personas de su pueblo en Barcelona. Hoy día,
        40 años después es el fundador de más de 100 tiendas a nivel mundial y uno de los proveedores
        más importantes del mundo cuando se trata de videojuegos.
      </p>

      <img
        src={`${process.env.PUBLIC_URL}/Imagenes/fundador.png`}
        alt="Fundador de la empresa"
        style={{ width: 200, height: "auto" }}
      />

      <p className="mt-3"><em>Navega por nuestros catálogos para encontrar tu juego ideal</em></p>

      <h3>Productos destacados (los más vendidos de la semana)</h3>

      <Row xs={1} md={3} className="g-3">
        {destacados.map((juego) => (
          <Col key={juego.id}>
            <Card className="h-100 text-center">
              <Card.Img
                variant="top"
                src={juego.imagen}
                alt={juego.nombre}
                style={{ height: 160, objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title as="h4" className="h6">{juego.nombre}</Card.Title>
                <Card.Text className="text-success fw-bold">
                  Precio anterior: <strong>{juego.precioAnterior}</strong> - Precio actual:{" "}
                  <strong>{juego.precioActual}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
