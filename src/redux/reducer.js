import {
  FETCH_POKEMON_LIST_REQUEST,
  FETCH_POKEMON_LIST_SUCCESS,
  FETCH_POKEMON_LIST_FAILURE,
} from "./actions";

const initialState = {
  pokemonList: [],
  loading: false,
  error: null,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonList: action.payload,
      };
    case FETCH_POKEMON_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
