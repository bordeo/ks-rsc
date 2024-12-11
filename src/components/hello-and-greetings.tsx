"use client";

import { useEffect, useState } from "react";

export function HelloAndGreetings() {
	const [greetings, setGreetings] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setGreetings(true);
		}, 2000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<div style={{ padding: 15, fontSize: 30 }}>
			🏗️ Hello{greetings && " World"}
		</div>
	);
}
