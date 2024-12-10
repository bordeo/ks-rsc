import fs from "node:fs/promises";

export async function ShowFileInfo() {
	const secretFile = await fs.readFile("src/data/secret-data.json", {
		encoding: "utf8",
	});

	return (
		<div style={{ background: "lightyellow", padding: 15, fontSize: 30 }}>
			<div>🚀 Secret Data</div>
			<pre style={{ fontSize: 16 }}>{secretFile}</pre>
		</div>
	);
}
