import React from 'react';
import styles from './Loader.css';

function Loader() {
	return (
		<div className={styles.loader}>
			<i className="spinning">refresh</i>
		</div>
	);
}

export default Loader;
