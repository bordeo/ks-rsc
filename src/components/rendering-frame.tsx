import { isClientComponent } from "@/utils/rsc";
import { Children, type ReactNode } from "react";

const isClient = isClientComponent();

const enabled = true;

export function RenderingFrame({
	children,
	name: _name,
	forceIsClient,
}: { children: ReactNode; name?: string; forceIsClient?: boolean }) {
	const _isClient = forceIsClient ?? isClient;

	return enabled
		? Children.map(children, (child) => {
				// @ts-ignore
				const name = _name ?? child?.type?.name ?? child?.type;

				return (
					<div className="rendering-frame">
						{name && (
							<div className="rendering-frame-name">
								{name} -{" "}
								<span
									className={`rendering-frame-c-type ${_isClient ? "client-c" : "server-c"}`}
								>
									{_isClient ? "client" : "server"}
								</span>
							</div>
						)}
						{child}
					</div>
				);
			})
		: children;
}
