import { createSelector } from 'reselect';

function getDayName(date) {
	return new Date(date).toLocaleString('en', { weekday: 'long' });
}

export const getWeather = state => state.weather.data;

export const getRequest = state => state.weather.request;

export const getForecast = createSelector(
	getWeather,
	weatherData => weatherData && weatherData.map(day => ({
		datetime: day.datetime,
		temp: day.temp,
		tempF: (day.temp * 9 / 5 + 32).toFixed(1),
		icon: day.weather.icon,
	}))
);
