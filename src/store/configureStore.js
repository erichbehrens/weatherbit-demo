import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middlewares = compose(
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
);

function configureStore() {
	const store = createStore(reducers, middlewares);
	return store;
}

export default configureStore;
