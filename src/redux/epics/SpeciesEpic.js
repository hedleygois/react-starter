import { ofType } from "redux-observable";
import { map,  flatMap } from "rxjs/operators";
import { from } from "rxjs";
import client from "../../mock-client/MockAxios";
import { FETCH_SPECIES } from "../actions/ActionTypes";
import { saveSpecies } from "../actions/Actions";

export const SpeciesEpic = actions =>
  actions.pipe(
    ofType(FETCH_SPECIES),
    flatMap(() => from(client.get("/species"))),
    map((result) => saveSpecies(result.data.results))
  );
