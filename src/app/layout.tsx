import type { Metadata } from "next";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans: NextFontWithVariable = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono: NextFontWithVariable = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Signalist",
	description: "Track real-time stock prices, get personalized alerts and explore detailed company insights.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
