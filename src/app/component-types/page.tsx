import { HelloAndGreetings } from "@/components/hello-and-greetings";
import { RenderOnMount } from "@/components/render-on-mount";
import { Welcome } from "@/components/welcome";
import { ShowFileInfo } from "@/components/show-file-info";

export default function Home() {
	return (
		<div className="page">
			<main className="main">
				<h1>Component Types ⭐ 🏗️ 🚀</h1>
				<br />
				<div className="main csr-component">
					<p>
						↓ This is a ⭐ <strong>Component</strong>
						<br />↓ This is a ⭐ <strong>Client Side Rendered Component</strong>
					</p>
					<RenderOnMount>
						<Welcome />
					</RenderOnMount>
				</div>
				<hr />
				<div className="main ssr-component">
					<p>
						↓ This is a 🏗️ <strong>Server Side Rendered Component</strong>
						<br />↓ This is a 🏗️ <strong>SSR Component</strong>
					</p>
					<HelloAndGreetings />
				</div>
				<hr />
				<div className="main rsc-component">
					<p>
						↓ This is a 🚀 <strong>React Server Component</strong>
						<br />↓ This is a 🚀 <strong>Server Component</strong>
					</p>
					<ShowFileInfo />
				</div>
			</main>
		</div>
	);
}
