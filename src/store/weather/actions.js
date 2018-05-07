import { FETCHING_STARTED, FETCHING_SUCCEEDED, FETCHING_FAILED, SET_SELECTED_DAY } from './constants';
import 'whatwg-fetch';
import config from '../../config';

async function fetchWeather() {
	const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?days=${config.days}&city=${config.city}&country=${config.country}&key=${config.apiKey}`);
	const data = await response.json();
	return data.data;
}

function getWeatherStarted() {
	return {
		type: FETCHING_STARTED,
	};
}

function getWeatherSucceeded(data) {
	return {
		type: FETCHING_SUCCEEDED,
		payload: {
			data,
		},
	};
}

export function setSelectedDayAction(selectedDay) {
	return {
		type: SET_SELECTED_DAY,
		payload: {
			selectedDay,
		},
	};
}

function getWeatherFailed() {
	return {
		type: FETCHING_FAILED,
	};
}

export function getWeatherAction() {
	return (dispatch) => {
		dispatch(getWeatherStarted());
		fetchWeather()
			.then((data) => {
				dispatch(getWeatherSucceeded(data));
			})
			.catch((err) => {
				console.log('Error fetching weather', err);
				dispatch(getWeatherFailed());
			});
	};
}
