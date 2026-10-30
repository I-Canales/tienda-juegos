import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { aValidate, reglas } from "../utils/validaciones";

function Contact() {
  const [enviado, setEnviado] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { terminos: false } });

  const onSubmit = (data) => {
    // no se muestran las contraseñas en consola
    const { clave, claveConfirmacion, ...datosPublicos } = data;
    console.log(datosPublicos);
    setEnviado(true);
    reset();
  };

  const campo = (id, etiqueta, opciones = {}) => (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label className="fw-bold">{etiqueta}</Form.Label>
      <Form.Control
        type={opciones.type || "text"}
        placeholder={opciones.placeholder}
        isInvalid={Boolean(errors[id])}
        {...register(id, { validate: opciones.validate })}
      />
      <Form.Control.Feedback type="invalid">{errors[id]?.message}</Form.Control.Feedback>
    </Form.Group>
  );

  return (
    <Container className="mt-4">
      <h1>Formulario de Registro y Contacto</h1>

      <Form
        noValidate
        onSubmit={(e) => {
          setEnviado(false);
          handleSubmit(onSubmit)(e);
        }}
        className="bg-white border rounded p-4"
        style={{ maxWidth: 400 }}
      >
        {campo("nombre", "Nombre:", { validate: aValidate(reglas.minLargo, 3) })}
        {campo("correo", "Correo Electrónico:", {
          placeholder: "ej: ja.pere@duocuc.cl",
          validate: aValidate(reglas.correo),
        })}
        {campo("telefono", "Teléfono:", { validate: aValidate(reglas.telefono) })}
        {campo("apodo", "Apodo (Opcional):", { validate: aValidate(reglas.apodo) })}
        {campo("usuario", "Usuario:", { validate: aValidate(reglas.minLargo, 4) })}
        {campo("clave", "Contraseña:", { type: "password", validate: aValidate(reglas.clave) })}
        {campo("claveConfirmacion", "Confirmar Contraseña:", {
          type: "password",
          validate: (valor) =>
            valor === getValues("clave") || "Las contraseñas no coinciden vuelva a intentar",
        })}

        <Form.Group className="mb-3" controlId="terminos">
          <Form.Check
            type="checkbox"
            label="Acepto los términos y condiciones"
            isInvalid={Boolean(errors.terminos)}
            feedback={errors.terminos?.message}
            feedbackType="invalid"
            {...register("terminos", {
              validate: (valor) => valor || "Debes aceptar los terminos y condiciones.",
            })}
          />
        </Form.Group>

        <Button type="submit">Registrarse / Enviar</Button>

        {enviado && (
          <Alert variant="success" className="mt-3 mb-0">
            ¡Registro exitoso! Los datos han sido enviados correctamente.
          </Alert>
        )}
      </Form>
    </Container>
  );
}

export default Contact;
