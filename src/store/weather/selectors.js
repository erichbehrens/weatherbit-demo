import { createSelector } from 'reselect';

export const getWeather = state => state.weather.data;

export const getSelectedDay = state => state.weather.selectedDay;

export const getRequest = state => state.weather.request;

export const getForecast = createSelector(
	getWeather,
	weatherData => weatherData && weatherData.map(day => day.mainData)
);

export const getDayForecast = createSelector(
	getSelectedDay,
	getWeather,
	(selectedDay, weather) => {
		if (!weather) {
			return null;
		}
		return weather.find(day => day.mainData.datetime === selectedDay);
	}

)
