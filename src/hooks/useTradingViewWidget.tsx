"use client";

import { RefObject, useEffect, useRef } from "react";

function useTradingViewWidget(
	scriptUrl: string,
	config: Record<string, unknown>,
	height = 600
): RefObject<HTMLDivElement | null> {
	const containerRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;
		if (containerRef.current.dataset.loaded) return;
		containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget_style="width: 100%; height: ${height}px;"></div>`;

		const script: HTMLScriptElement = document.createElement("script");
		script.src = scriptUrl;
		script.async = true;
		script.innerHTML = JSON.stringify(config);

		containerRef.current.appendChild(script);
		containerRef.current.dataset.loaded = "true";

		return () => {
			if (containerRef.current) {
				containerRef.current.innerHTML = "";
				delete containerRef.current.dataset.loaded;
			}
		};
	}, [scriptUrl, config, height]);

	return containerRef;
}

export default useTradingViewWidget;
