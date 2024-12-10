import { FancyText } from "@/components/fancy-text";
import { InspirationGenerator } from "@/components/inspiration-generator";
import { Copyright } from "@/components/copyright";
import { RenderOnMount } from "@/components/render-on-mount";
import { Welcome } from "@/components/welcome";

export default function Home() {
	return (
		<div className="page">
			<main className="main">
				<h1>Knowledge Share</h1>
				<a className="main-link" href="/component-types">
					Component Types ⭐ 🏗️ 🚀
				</a>
				<a className="main-link" href="/component-rendering">
					Component Rendering 🖼️
				</a>
			</main>
		</div>
	);
}
