import React from 'react';
import { connect } from 'react-redux';
import { getForecast } from '../../store/weather/selectors';
import Panel from '../Panel';
import './Forecast.css';

function getDayName(date) {
	return new Date(date).toLocaleString('en', { weekday: 'long' });
}

function Forecast({ forecast, onDayChanged }) {
	if (!forecast) {
		return null;
	}
	return (
		<Panel>
			<ul className="forecast">
				{forecast.map((day) => {
					return (
						<li key={day.datetime} onClick={() => onDayChanged(day.datetime)}>
							{getDayName(day.datetime)}<br />
							<img
								className="icon"
								src={`https://www.weatherbit.io/static/img/icons/${day.icon}.png`}
								alt={day.description}
							/><br />
							{day.temp} °C<br />
							{day.tempF} °F<br />
						</li>
					);
				})}
			</ul>
		</Panel>
	);
}

function mapStateToProps(state) {
	return {
		forecast: getForecast(state),
	}
}

export default connect(mapStateToProps)(Forecast);
