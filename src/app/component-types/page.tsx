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
				<p>
					↓ This is a ⭐ <strong>Client Side Rendered Component</strong>
					<br />↓ This is a ⭐ <strong>React Component</strong>
					<br />↓ This is a ⭐<strong>Component</strong>
				</p>
				<RenderOnMount>
					<Welcome />
				</RenderOnMount>
				<p>
					↓ This is a 🏗️ <strong>Server Side Rendered Component</strong>
					<br />↓ This is a 🏗️ <strong>SSR Component</strong>
				</p>
				<HelloAndGreetings />
				<p>
					↓ This is a 🚀 <strong>React Server Component</strong>
					<br />↓ This is a 🚀 <strong>Server Component</strong>
				</p>
				<ShowFileInfo />
			</main>
		</div>
	);
}
