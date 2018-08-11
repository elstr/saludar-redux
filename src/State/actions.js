import { createAction } from "redux-actions";

// Actions
export const HOLA = "HOLA";
export const CHAU = "CHAU";

// Action Creators
export const decirHola = createAction(HOLA);
export const decirChau = createAction(CHAU);
