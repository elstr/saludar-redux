// Actions
export const HOLA = "HOLA";
export const CHAU = "CHAU";
export const CAMBIAR_NOMBRE = "CAMBIAR_NOMBRE";

export function decirHola() {
  return {
    type: HOLA
  };
}
export function decirChau() {
  return {
    type: CHAU
  };
}
export function cambiarNombre(nombre) {
  return {
    type: CAMBIAR_NOMBRE,
    payload: {
      nombre
    }
  };
}
