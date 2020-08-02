const { initialState } = require("../../InitialState");
const {
  selectPlanets,
  selectSpecies,
  selectPeople,
  selectPeopleByName,
  selectPlanetByName,
  selectSpeciesByName,
  selectPlanetByUrl,
  selectSpeciesByUrl,
  selectPeopleByPlanet,
  selectPeopleBySpecies,
} = require("../Selector");

describe("Selector", () => {
  it("selects all the planets", () => {
    const state = { ...initialState, planets: [{ name: "Test" }] };
    expect(selectPlanets(state)).toEqual([{ name: "Test" }]);
  });

  it("selects all the species", () => {
    const state = { ...initialState, species: [{ name: "Test" }] };
    expect(selectSpecies(state)).toEqual([{ name: "Test" }]);
  });

  it("selects all the people", () => {
    const state = { ...initialState, people: [{ name: "Test" }] };
    expect(selectPeople(state)).toEqual([{ name: "Test" }]);
  });

  it("selects planets by  name", () => {
    const state = {
      ...initialState,
      planets: [{ name: "Test" }, { name: "Naboo" }],
    };
    expect(selectPlanetByName(state, "Naboo")).toEqual([{ name: "Naboo" }]);
  });

  it("selects species by  name", () => {
    const state = {
      ...initialState,
      species: [{ name: "Test" }, { name: "Hedley" }],
    };
    expect(selectSpeciesByName(state, "Test")).toEqual([{ name: "Test" }]);
  });

  it("selects people by  name", () => {
    const state = {
      ...initialState,
      people: [{ name: "Test" }, { name: "Hedley" }],
    };
    expect(selectPeopleByName(state, "Hedley")).toEqual([{ name: "Hedley" }]);
  });

  it("selects planets by url", () => {
    const state = {
      ...initialState,
      planets: [
        { name: "Test", url: "https://swapi.co/api/planets/2/" },
        { name: "Hedley", url: "https://swapi.co/api/planets/3/" },
      ],
    };
    expect(
      selectPlanetByUrl(state, "https://swapi.co/api/planets/2/")
    ).toEqual([{ name: "Test", url: "https://swapi.co/api/planets/2/" }]);
  });

  it("selects species by url", () => {
    const state = {
      ...initialState,
      species: [
        { name: "Test", url: "https://swapi.co/api/species/2/" },
        { name: "Hedley", url: "https://swapi.co/api/species/5/" },
      ],
    };
    expect(
      selectSpeciesByUrl(state, "https://swapi.co/api/species/5/")
    ).toEqual([{ name: "Hedley", url: "https://swapi.co/api/species/5/" }]);
  });

  it("selects people by planet", () => {
    const state = {
      ...initialState,
      planets: [
        {
          name: "Naboo",
          url: "https://swapi.co/api/planets/5/",
          residents: ["https://swapi.co/api/people/4/"],
        },
        {
          name: "Test Planet",
          url: "https://swapi.co/api/planets/6/",
          residents: ["https://swapi.co/api/people/3/"],
        },
      ],
      people: [
        {
          name: "Test",
          homeworld: "https://swapi.co/api/planets/6/",
          url: "https://swapi.co/api/people/3/",
        },
        {
          name: "Hedley",
          homeworld: "https://swapi.co/api/planets/5/",
          url: "https://swapi.co/api/people/4/",
        },
      ],
    };
    expect(selectPeopleByPlanet(state, "Naboo")).toEqual([
      {
        name: "Hedley",
        homeworld: "https://swapi.co/api/planets/5/",
        url: "https://swapi.co/api/people/4/",
      },
    ]);
  });

  it("selects people by species", () => {
    const state = {
      ...initialState,
      species: [
        {
          name: "Yoda's",
          url: "https://swapi.co/api/species/5/",
        },
        {
          name: "Another Race",
          url: "https://swapi.co/api/species/6/",
        },
      ],
      people: [
        {
          name: "Test",
          url: "https://swapi.co/api/people/3/",
          species: ["https://swapi.co/api/species/6"],
        },
        {
          name: "Hedley",
          url: "https://swapi.co/api/people/4/",
          species: ["https://swapi.co/api/species/5/"],
        },
      ],
    };
    expect(selectPeopleBySpecies(state, "Yoda's")).toEqual([
      {
        name: "Hedley",
        url: "https://swapi.co/api/people/4/",
        species: ["https://swapi.co/api/species/5/"],
      },
    ]);
  });
});
