"use client";

import { useState } from "react";
import inspirations from "@/data/inspirations";
import { FancyText } from "@/components/fancy-text";
import type { ReactNode } from "react";
import { RenderingFrame } from "./rendering-frame";

type Props = {
	children: ReactNode;
	top?: ReactNode;
	bottom?: ReactNode;
};

export function InspirationGenerator({ children, top, bottom }: Props) {
	const [index, setIndex] = useState(0);
	const quote = inspirations[index];
	const next = () => setIndex((index + 1) % inspirations.length);

	return (
		<>
			{top}
			<p>Your inspirational quote is:</p>
			<RenderingFrame>
				<FancyText text={quote} />
			</RenderingFrame>
			<button type="button" onClick={next} className="button">
				Inspire me again
			</button>
			{children}
			{bottom}
		</>
	);
}

export function InspirationGeneratorWrapper(props: Props) {
	return (
		<RenderingFrame>
			<InspirationGenerator {...props} />
		</RenderingFrame>
	);
}
