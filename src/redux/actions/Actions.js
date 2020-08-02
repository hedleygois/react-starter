// if we had more actions this file would have to be breakdown in multiple ones also

import { FETCH_PLANETS, SAVE_PLANETS, SAVE_SPECIES, SAVE_PEOPLE, SET_SELECTION, FETCH_SPECIES, FETCH_PEOPLE } from "./ActionTypes";

// Same breakdown rule for this file

export const fetchPlanets = () => ({
  type: FETCH_PLANETS,
});

export const savePlanets = (planets) => ({
  type: SAVE_PLANETS,
  payload: planets,
});

export const fetchSpecies = () => ({
  type: FETCH_SPECIES,
});

export const saveSpecies = (species) => ({
  type: SAVE_SPECIES,
  payload: species,
});

export const fetchPeople = () => ({
  type: FETCH_PEOPLE,
});

export const savePeople = (people) => ({
  type: SAVE_PEOPLE,
  payload: people,
});

export const selectElement = (selected, type) => ({
  type: SET_SELECTION,
  payload: { selection: selected, type },
});
