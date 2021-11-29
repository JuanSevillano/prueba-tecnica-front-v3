import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import authReducer from './reducers/auth'
import usersReducer from './reducers/users';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer
})

export type AppState = ReturnType<typeof rootReducer>;
const middlewares = [thunk];
const middlewaresEnhancer = applyMiddleware(...middlewares);

const store = createStore(
  rootReducer,
  composeWithDevTools(middlewaresEnhancer)
);

export default store;
