import React, { useState, useEffect } from 'react';

const Timer = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timer = setTimeout(setTime(new Date()), 1000);
		return () => clearTimeout(timer);
	}, [time]);
	return (
		<div>
			<p>Time: {time.toLocaleTimeString()}</p>
		</div>
	);
};

export default Timer;
