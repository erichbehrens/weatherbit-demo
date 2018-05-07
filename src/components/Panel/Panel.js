import React from 'react';
import './Panel.css';

function Panel({ title, children }) {
	return (
		<div className="panel">
			{title && <h3>{title}</h3>}
			{children}
		</div>
	);
}

export default Panel;
