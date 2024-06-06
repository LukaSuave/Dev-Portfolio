import { Hero } from "@/components/global/hero";
import { Grid } from "@/components/global/grid";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

const MainPage = () => {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
			</div>
		</main>
	);
};

export default MainPage;