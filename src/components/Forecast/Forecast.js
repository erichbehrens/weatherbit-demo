import React from 'react';
import { connect } from 'react-redux';
import { getForecast } from '../../store/weather/selectors';

function getDayName(date) {
	return new Date(date).toLocaleString('en', {weekday: 'long'} );
}

function Forecast({ forecast, onDayChanged }) {
	if(!forecast) {
		return null;
	}
	return (
		<ul>
			{forecast.map((day) => {
				return (
					<li key={day.datetime} onClick={() => onDayChanged(day.datetime)}>
						{getDayName(day.datetime)}<br />
						<img src={`https://www.weatherbit.io/static/img/icons/${day.icon}.png`} /><br />
						{day.temp} °C<br />
						{day.tempF} °F<br />
						</li>
				);
			})}
		</ul>
	);
}

function mapStateToProps(state) {
	return {
		forecast: getForecast(state),
	}
}

export default connect(mapStateToProps)(Forecast);
