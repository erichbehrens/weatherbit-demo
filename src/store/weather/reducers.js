import { FETCHING_STARTED, FETCHING_SUCCEEDED, FETCHING_FAILED, SET_SELECTED_DAY } from './constants';

const initialState = {
	data: undefined,
	request: { isFetching: false },
};

function getMainData(day) {
	return ({
		datetime: day.datetime,
		temp: day.temp,
		tempF: (day.temp * 9 / 5 + 32).toFixed(1),
		icon: day.weather.icon,
		description: day.weather.description,
	});
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_STARTED:
			return {
				...state,
				request: { isFetching: true },
			};
		case FETCHING_SUCCEEDED: {
			const { data } = action.payload;
			const normalizedData = data.map(dayForecast => ({
				mainData: getMainData(dayForecast),
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
			}))
			return {
				...state,
				request: { isFetching: false },
				data: normalizedData,
				selectedDay: data[0].datetime,
			};
		}
		case SET_SELECTED_DAY: {
			const { selectedDay } = action.payload;
			return {
				...state,
				selectedDay,
			};
		}
		case FETCHING_FAILED:
			return {
				...state,
				request: { isFetching: false, error: true },
			};

		default:
			return state;
	}
}

export default reducer;
