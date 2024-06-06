import { Approach } from "@/components/global/approach";
import { Clients } from "@/components/global/clients";
import { Experience } from "@/components/global/experience";
import { Footer } from "@/components/global/footer";
import { Grid } from "@/components/global/grid";
import { Hero } from "@/components/global/hero";
import { RecentProjects } from "@/components/global/recent-projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

const MainPage = () => {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:p-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<RecentProjects />
				<Clients />
				<Experience />
				<Approach />
				<Footer />
			</div>
		</main>
	);
};

export default MainPage;
