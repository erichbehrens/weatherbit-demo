import React from 'react';
import './SelectedDay.css';

function getDayName(date) {
	return new Date(date).toLocaleString('en', { weekday: 'long' });
}

function LocalForecast({ icon, datetime, description, temp, tempF }) {
	return (
				<div className="localForecast">
					<div className="icon">
						<img src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} alt={description} />
					</div>
					<div className="detail">
						<div className="dayName">{getDayName(datetime)}</div>
						<div className="description">{description}</div>
						<div>{temp} °C</div>
						<div>{tempF} °F</div>
					</div>
				</div>
	);
}

export default LocalForecast;
