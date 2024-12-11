import fs from "node:fs/promises";

type Secrets = {
	case_id: string;
	agent_name: string;
	operation: string;
	status: string;
	location: string;
	target: string;
	last_update: string;
	priority_level: string;
	resources_allocated: string;
	notes: string;
};

export async function ShowFileInfo() {
	const secretFile = await fs.readFile("src/data/secret-data.json", {
		encoding: "utf8",
	});

	const secrets: Secrets = JSON.parse(secretFile);

	return (
		<div style={{ padding: 15, fontSize: 30 }}>
			<div>🚀 Secret Data</div>
			<div style={{ fontSize: 16 }}>
				<strong>{secrets.agent_name}</strong> is working on{" "}
				<strong>{secrets.operation}</strong> with{" "}
				<strong>{secrets.priority_level}</strong> priority.
				<br />
				Latest updated received on <strong>{secrets.last_update}</strong>
			</div>
			{/* <pre style={{ fontSize: 16 }}>{secretFile}</pre> */}
		</div>
	);
}
