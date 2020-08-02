import { ofType } from "redux-observable";
import { map, flatMap } from "rxjs/operators";
import { from } from "rxjs";
import client from "../../mock-client/MockAxios";
import { FETCH_PLANETS } from "../actions/ActionTypes";
import { savePlanets } from "../actions/Actions";

export const PlanetsEpic = (actions) =>
  actions.pipe(
    ofType(FETCH_PLANETS),
    flatMap(() => from(client.get("/planets"))),
    map((result) => savePlanets(result.data.results))
  );
