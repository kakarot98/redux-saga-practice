import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./ducks/counter";
import userReducer from "./ducks/user";
import { watcherSaga } from "./sagas/rootSaga";

const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]; //can include other middlewares

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(watcherSaga);

export default store;
