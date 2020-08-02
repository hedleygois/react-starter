import { createEpicMiddleware } from "redux-observable";
import { createStore, applyMiddleware } from "redux";
import { starWarsReducer } from "./Reducers";
import { RootEpic } from "./RootEpic";

const epicMiddleware = createEpicMiddleware();

export const configureStore = () => {
  const store = createStore(starWarsReducer, applyMiddleware(epicMiddleware));
  epicMiddleware.run(RootEpic);
  return store
}