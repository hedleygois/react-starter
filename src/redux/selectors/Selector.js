// This selector would be multiple in a bigger app

import { createSelector } from "reselect";
import createCachedSelector, { LruMapCache } from "re-reselect";

const getState = (state) => state;

export const selectPlanets = createSelector(getState, (state) => state.planets);

export const selectSpecies = createSelector(getState, (state) => state.species);

export const selectPeople = createSelector(getState, (state) => state.people);

const selectSecondParam = (_, name) => name;
const selectThirdParam = (_, name) => name;

export const selectPlanetByName = createCachedSelector(
  [selectPlanets, selectSecondParam],
  (planets, name) =>
    name ? planets.filter((planet) =>
      planet.name.toLowerCase().includes(name.toLowerCase())
    ) : []
)({ keySelector: (_, name) => name, cacheObject: new LruMapCache({ cacheSize: 10 }) });

export const selectPlanetByUrl = createCachedSelector(
  [selectPlanets, selectSecondParam],
  (planets, url) =>
    url ? planets.filter((planet) =>
      planet.url.toLowerCase().includes(url.toLowerCase())
    ) : []
)({ keySelector: (_, url) => url, cacheObject: new LruMapCache({ cacheSize: 10 }) });


export const selectSpeciesByName = createCachedSelector(
  [selectSpecies, selectSecondParam],
  (species, name) =>
    name ? species.filter((race) =>
      race.name.toLowerCase().includes(name.toLowerCase())
    ) : []
)({ keySelector: (_, name) => name, cacheObject: new LruMapCache({ cacheSize: 10 }) });

export const selectSpeciesByUrl = createCachedSelector(
  [selectSpecies, selectSecondParam],
  (species, url) =>
    url ? species.filter((race) =>
      race.url.toLowerCase().includes(url.toLowerCase())
    ) : []
)({ keySelector: (_, url) => url, cacheObject: new LruMapCache({ cacheSize: 10 }) });

export const selectPeopleByName = createCachedSelector(
  [selectPeople, selectSecondParam],
  (planets, name) =>
    name ? planets.filter((planet) =>
      planet.name.toLowerCase().includes(name.toLowerCase())
    ) : []
)({ keySelector: (_, name) => name, cacheObject: new LruMapCache({ cacheSize: 10 }) });

export const selectPeopleByPlanet = createCachedSelector(
  [selectPeople, selectPlanetByName, selectThirdParam],
  (people, planets, name) => {
    if (!name) return [];
    const planet = planets[0];
    const residents = planet.residents;
    // TODO memoize it if I have time
    return people.filter(person => residents.includes(person.url));
  }
)({ keySelector: (_, name) => name, cacheObject: new LruMapCache({ cacheSize: 10 }) });

export const selectPeopleBySpecies = createCachedSelector(
  [selectPeople, selectSpeciesByName, selectThirdParam],
  (people, races, name) => {
    if (!name) return [];
    const race = races[0];
    // TODO memoize it if I have time
    return people.filter(person => person.species[0] === race.url);
  }
)({ keySelector: (_, name) => name, cacheObject: new LruMapCache({ cacheSize: 10 }) });