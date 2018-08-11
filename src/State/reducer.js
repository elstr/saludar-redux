import { handleActions } from "redux-actions";
import * as actions from "./actions";

const INITIAL_STATE = {
  mensaje: null
};

const Saludar = handleActions(
  {
    [actions.HOLA]: (state, action) => {
      return {
        mensaje: "holu " + action.payload
      };
    },
    [actions.CHAU]: (state, action) => {
      console.log({ action });
      return {
        mensaje: "chau " + action.payload
      };
    }
  },
  INITIAL_STATE
);

export default Saludar;

// // Otra forma sin react-actions
// export default (INITIAL_STATE, action) => {
//     switch (action.type) {
//       case "HOLA":
//         return "HOLA FULANO";
//       case "CHAU":
//         return "CHAU FULANO";
//       default:
//         return state;
//     }
//   };
