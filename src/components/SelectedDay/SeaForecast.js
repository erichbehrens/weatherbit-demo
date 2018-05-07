import React from 'react';
import './SelectedDay.css';

function SeaForecast({ seaForecast }) {

	return (
		<div className="seaForecast">
			<div className="row">
				<div className="label">Wind speed</div>
				<div>{seaForecast.windSpeed} m/s</div>
			</div>
			<div className="row">
				<div className="label">Wind guts</div>
				<div>{seaForecast.windGuts} m/s</div>
			</div>
			<div className="row">
				<div className="label">Wind direction</div>
				<div>{seaForecast.windDirection}</div>
			</div>
			<div className="row">
				<div className="label">Cloud cover</div>
				<div>{seaForecast.cloudCover}%</div>
			</div>
		</div>
	);
}

export default SeaForecast;
