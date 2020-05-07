import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from "./store/reducers/RootReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const middlewares = [thunk];

export const createStoreWithMiddleware = composeEnhancer(applyMiddleware(...middlewares))(createStore)

export const store = createStoreWithMiddleware(RootReducer)
