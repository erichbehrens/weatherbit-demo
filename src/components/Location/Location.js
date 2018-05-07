import React from 'react';

function Location({ city, region, country }) {
	return (
		<div>
			<h1>{city}</h1>
			<h2>{region}, {country}</h2>
		</div>
	);
}

export default Location;
