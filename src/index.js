import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

function ReduxApp() {
	return <Provider store={store}>
		<App />
	</Provider>;
}

ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();
