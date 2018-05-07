import React from 'react';
import { connect } from 'react-redux';
import { getDayForecast } from '../../store/weather/selectors';

function getDayName(date) {
	return new Date(date).toLocaleString('en', { weekday: 'long' });
}

function SelectedDay({ forecast }) {
	if (!forecast) {
		return null;
	}
	return (
		<div>
			<div>
				{getDayName(forecast.datetime)}<br />
				<img src={`https://www.weatherbit.io/static/img/icons/${forecast.icon}.png`} /><br />
				{forecast.temp} °C<br />
				{forecast.tempF} °F<br />
			</div>
			<div>
				SelectedDay

				<div><div>Wind speed</div> <div>{forecast.seaForecast.windSpeed} m/s</div></div>
				<div><div>Wind guts</div> <div>{forecast.seaForecast.windGuts} m/s</div></div>
				<div><div>Wind direction</div> <div>{forecast.seaForecast.windDirection}</div></div>
				<div><div>Cloud cover</div> <div>{forecast.seaForecast.cloudCover}%</div></div>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		forecast: getDayForecast(state),
	}
}

export default connect(mapStateToProps)(SelectedDay);
