export function FancyText({ title, text }: { title?: boolean; text: string }) {
	return title ? (
		<h2 className="fancy title">{text}</h2>
	) : (
		<h4 className="fancy cursive">{text}</h4>
	);
}
