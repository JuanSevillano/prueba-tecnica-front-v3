import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './reducers/auth'

const rootReducer = combineReducers({
  auth: authReducer
})

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

export default store;
