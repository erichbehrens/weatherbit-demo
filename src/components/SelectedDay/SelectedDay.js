import React from 'react';
import { connect } from 'react-redux';
import { getDayForecast } from '../../store/weather/selectors';
import Panel from '../Panel';
import './SelectedDay.css';

function getDayName(date) {
	return new Date(date).toLocaleString('en', { weekday: 'long' });
}

function SelectedDay({ forecast }) {
	if (!forecast) {
		return null;
	}
	return (
		<div className="selectedDay">
			<Panel title="Local weather report">
				<div className="localForecast">
					<div className="icon">
						<img src={`https://www.weatherbit.io/static/img/icons/${forecast.icon}.png`} />
					</div>
					<div className="detail">
						<div className="dayName">{getDayName(forecast.datetime)}</div>
						<div className="description">{forecast.description}</div>
						<div>{forecast.temp} °C</div>
						<div>{forecast.tempF} °F</div>
					</div>
				</div>
			</Panel>
			<Panel title="Sea forecast report">
				<div className="seaForecast">
					<div className="label">Wind speed</div>
					<div>{forecast.seaForecast.windSpeed} m/s</div>
				</div>
				<div className="seaForecast">
					<div className="label">Wind guts</div>
					<div>{forecast.seaForecast.windGuts} m/s</div>
				</div>
				<div className="seaForecast">
					<div className="label">Wind direction</div>
					<div>{forecast.seaForecast.windDirection}</div>
				</div>
				<div className="seaForecast">
					<div className="label">Cloud cover</div>
					<div>{forecast.seaForecast.cloudCover}%</div>
				</div>
			</Panel>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		forecast: getDayForecast(state),
	}
}

export default connect(mapStateToProps)(SelectedDay);
