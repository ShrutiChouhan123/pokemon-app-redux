import { combineReducers } from 'redux';
import { pokemonReducer } from './reducers';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export default rootReducer;
