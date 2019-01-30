import { HOLA, CHAU, CAMBIAR_NOMBRE } from "./actions";

const INITIAL_STATE = {
  mensaje: "",
  nombre: "FULANO"
};

const Saludar = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOLA:
      return { ...state, mensaje: `HOLA ${state.nombre}` };
    case CHAU:
      return { ...state, mensaje: `CHAU ${state.nombre}` };
    case CAMBIAR_NOMBRE:
      return { ...state, nombre: action.payload.nombre };
    default:
      return state;
  }
};

export default Saludar;
