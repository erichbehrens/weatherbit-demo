import { createSelector } from 'reselect';

function getMainData(day) {
	return ({
		datetime: day.datetime,
		temp: day.temp,
		tempF: (day.temp * 9 / 5 + 32).toFixed(1),
		icon: day.weather.icon,
	});
}

export const getWeather = state => state.weather.data;

export const getSelectedDay = state => state.weather.selectedDay;

export const getRequest = state => state.weather.request;

export const getForecast = createSelector(
	getWeather,
	weatherData => weatherData && weatherData.map(getMainData)
);

export const getDayForecast = createSelector(
	getSelectedDay,
	getWeather,
	(selectedDay, weather) => {
		if (!weather) {
			return null;
		}
		const dayForecast = weather.find(day => day.datetime === selectedDay);
		return ({
			...getMainData(dayForecast),
			seaForecast: {
				windSpeed: dayForecast.wind_spd.toFixed(1),
				windGuts: dayForecast.wind_gust_spd.toFixed(1),
				windDirection: dayForecast.wind_cdir,
				/*
				wave,
				wavePeriod,
				waveDirection,
				temp,
				*/
				cloudCover: dayForecast.clouds,
			}
		})
	}

)
