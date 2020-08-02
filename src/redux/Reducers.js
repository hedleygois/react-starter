import { initialState } from "./InitialState";
import {
  SAVE_PLANETS,
  SAVE_PEOPLE,
  SAVE_SPECIES,
  SET_SELECTION,
} from "./actions/ActionTypes";

export const savePlanets = (state, { payload }) => ({
  ...state,
  planets: payload,
});

export const saveSpecies = (state, { payload }) => ({
  ...state,
  species: payload,
});

export const savePeople = (state, { payload }) => ({
  ...state,
  people: payload,
});

export const setSelection = (state, { payload }) => ({
  ...state,
  selection: payload,
});

//  no combineReducers because it's not big enough
export const starWarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PLANETS:
      return savePlanets(state, action);
    case SAVE_SPECIES:
      return saveSpecies(state, action);
    case SAVE_PEOPLE:
      return savePeople(state, action);
    case SET_SELECTION:
      return setSelection(state, action);
    default:
      return state;
  }
};