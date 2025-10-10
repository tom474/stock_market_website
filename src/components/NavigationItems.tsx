"use client";
import { NAVIGATION_ITEMS } from "@/lib/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavigationItems() {
	const pathname: string = usePathname();

	const isActive = (path: string): boolean => {
		if (path === "/") return pathname === "/";

		return pathname.startsWith(path);
	};

	return (
		<ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
			{NAVIGATION_ITEMS.map(({ href, label }) => (
				<li key={href}>
					<Link
						href={href}
						className={`hover:text-yellow-500 transition-colors ${
							isActive(href) ? "text-gray-100" : ""
						}`}
					>
						{label}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default NavigationItems;
