// rootReducer.js
import { combineReducers } from "redux";
import pokemonReducer from "./reducer";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export default rootReducer;
