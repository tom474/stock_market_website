import { Inngest } from "inngest";

export const inngest = new Inngest({
	id: "stock_market_website",
	ai: { gemini: { apiKey: process.env.GEMINI_API_KEY } },
});
