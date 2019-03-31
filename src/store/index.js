import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);