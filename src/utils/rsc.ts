import React from "react";

export function canUseDOM() {
	return !!(
		typeof window !== "undefined" &&
		window.document &&
		window.document.createElement
	);
}

export function isClientComponent() {
	return canUseDOM();
}
