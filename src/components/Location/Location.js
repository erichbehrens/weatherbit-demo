import React from 'react';
import './Location.css';

function Location({ city, region, country }) {
	return (
		<div className="location">
			<h1 className="city">{city}</h1>
			<h2 className="region">{country}</h2>
		</div>
	);
}

export default Location;
