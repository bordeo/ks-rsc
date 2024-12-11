import { FancyText } from "@/components/fancy-text";
import { InspirationGeneratorWrapper } from "@/components/inspiration-generator";
import { Copyright } from "@/components/copyright";
import { RenderingFrame } from "@/components/rendering-frame";

export default function ComponentRenderingPage() {
	return (
		<div className="page">
			<main className="main">
				<h1>Component Rendering 🖼️</h1>

				<RenderingFrame>
					<FancyText title text="Get Inspired App" />
				</RenderingFrame>
				<InspirationGeneratorWrapper
					top={
						<RenderingFrame>
							<FancyText text="Top text as a prop" />
						</RenderingFrame>
					}
					bottom={
						<RenderingFrame>
							<span>Bottom text as a prop</span>
						</RenderingFrame>
					}
				>
					<RenderingFrame>
						<Copyright year={2004} />
					</RenderingFrame>
				</InspirationGeneratorWrapper>
			</main>
		</div>
	);
}
