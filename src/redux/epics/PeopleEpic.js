import { ofType } from "redux-observable";
import { from } from "rxjs";
import { flatMap, map } from "rxjs/operators";
import client from "../../mock-client/MockAxios";
import { FETCH_PEOPLE } from "../actions/ActionTypes";
import { savePeople } from "../actions/Actions";

export const PeopleEpic = (actions) =>
  actions.pipe(
    ofType(FETCH_PEOPLE),
    flatMap(() => from(client.get("/people"))),
    map((result) => savePeople(result.data.results))
  );
