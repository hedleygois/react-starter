import { ActionsObservable, StateObservable } from "redux-observable";
import { Subject } from "rxjs";
import { toArray } from "rxjs/operators";
import people from "../../../mock-client/data/people.json";
import { fetchPeople, savePeople } from "../../actions/Actions";
import { PeopleEpic } from "../PeopleEpic";


export function inspectEpicWithActions(epic, action, state) {
  return new Promise((resolve, reject) => {
    const actionSubject = new Subject();
    const actionsObservable = new ActionsObservable(actionSubject);
    const stateSubject = new Subject();
    const stateObservable = new StateObservable(stateSubject, state);
    const actions = Array.isArray(action) ? action : [action];

    epic(actionsObservable, stateObservable, {})
      .pipe(toArray())
      .subscribe(resolve, reject);

    actions.forEach((action) => actionSubject.next(action));
    actionSubject.complete();
    stateSubject.complete();
  });
}

describe("PeopleEpic", () => {
  afterEach(jest.resetAllMocks);

  it("returns the people when FETCH_PEOPLE is fired", async () => {
    const actions = await inspectEpicWithActions(PeopleEpic, fetchPeople());
    expect(actions).toEqual([savePeople(people.results)]);
  });
});
