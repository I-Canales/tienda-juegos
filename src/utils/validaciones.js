// Reglas de validacion del formulario (tomadas de TiendaJuegos.js).
// Cada regla devuelve "" si el valor es valido o el mensaje de error.
export const reglas = {
  requerido: (valor) => (valor.trim() === "" ? "Este campo es obligatorio" : ""),

  correo: (valor) => {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (valor.trim() === "") return "Este campo es obligatorio";
    return patron.test(valor) ? "" : "Ingresa un correo con formato valido, por ejemplo ja.pere@duocuc.cl";
  },

  telefono: (valor) => {
    const patron = /^\+?[0-9\s]{8,15}$/;
    if (valor.trim() === "") return "Este campo es obligatorio";
    return patron.test(valor) ? "" : "Ingresa un telefono valido (solo numeros, entre 8 y 15 digitos).";
  },

  minLargo: (valor, largo) => {
    if (valor.trim() === "") return "Este campo es obligatorio.";
    return valor.trim().length >= largo ? "" : `Debe tener al menos ${largo} caracteres.`;
  },

  apodo: (valor) => {
    if (valor.trim() === "") return "";
    const patron = /^[a-zA-Z0-9_]{3,15}$/;
    return patron.test(valor) ? "" : "Usa entre 3 y 15 caracteres, sin espacios ni simbolos.";
  },

  clave: (valor) => {
    const tieneLetra = /[a-zA-Z]/.test(valor);
    const tieneNumero = /[0-9]/.test(valor);
    if (valor === "") return "Este campo es obligatorio.";
    if (valor.length < 8) return "Debe tener al menos 8 caracteres.";
    if (!tieneLetra || !tieneNumero) return "Debe incluir al menos una letra y un numero.";
    return "";
  },
};

// Adapta una regla al formato de react-hook-form:
// devuelve true si es valido o el mensaje de error.
export const aValidate = (regla, ...args) => (valor) => regla(valor ?? "", ...args) || true;
