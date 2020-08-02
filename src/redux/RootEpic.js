import { combineEpics } from "redux-observable";
import { PlanetsEpic } from "./epics/PlanetsEpic";
import { SpeciesEpic } from "./epics/SpeciesEpic";
import { PeopleEpic } from "./epics/PeopleEpic";

export const RootEpic = combineEpics(
  PlanetsEpic,
  SpeciesEpic,
  PeopleEpic
);