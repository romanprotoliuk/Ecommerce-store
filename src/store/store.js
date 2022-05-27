import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [ 'user' ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// if the project is in development we will use logger to log redux
// otherwise the first condition will be false and filter will take over and filter everything that is false
const middleWares = [ process.env.NODE_ENV !== 'production' && logger ].filter(Boolean);

const composeEnhancer =
	(process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
