import React from 'react';
import { connect } from 'react-redux';
import { getDayForecast } from '../../store/weather/selectors';
import Panel from '../Panel';
import './SelectedDay.css';
import LocalForecast from './LocalForecast';
import SeaForecast from './SeaForecast';

function getDayName(date) {
	return new Date(date).toLocaleString('en', { weekday: 'long' });
}

function SelectedDay({ forecast }) {
	if (!forecast) {
		return null;
	}
	const { mainData, seaForecast } = forecast;
	return (
		<div className="selectedDay">
			<Panel title="Local weather report">
				<LocalForecast
					icon={mainData.icon}
					datetime={mainData.datetime}
					description={mainData.description}
					temp={mainData.temp}
					tempF={mainData.tempF}
				/>
			</Panel>
			<Panel title="Sea forecast report">
				<SeaForecast seaForecast={seaForecast} />
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
