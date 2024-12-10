"use client";

import { useEffect, useState, type ReactNode } from "react";

export function RenderOnMount({ children }: { children: ReactNode }) {
	const [mount, setMount] = useState(false);
	useEffect(() => {
		setMount(true);
	}, []);

	return mount ? children : null;
}
