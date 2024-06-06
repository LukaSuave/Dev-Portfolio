import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Emmanuel's Tech Portfolio",
	description:
		"Emmanuel Senengu - Full-Stack Software Developer from Zimbabwe. Proficient in Python, Next.js, TypeScript, and React for both backend and frontend development. Skilled in AI integration, API management, and database technologies including PostgreSQL, MySQL, and MongoDB. Transforming innovative ideas into high-quality software solutions.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
