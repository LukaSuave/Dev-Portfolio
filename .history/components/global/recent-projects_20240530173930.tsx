import { projects } from "@/data";
import { PinContainer } from "@/components/ui/3d-pin";

export const RecentProjects = () => {
	return (
		<div className="py-20">
			<h1 className="heading">
				A Small Selection of{" "}
				<span className="text-blue-600">Recent Projects</span>
			</h1>
			<div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
				{projects.map((project) => (
					<div
						key={project.id}
						className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[90vw]"
					>
						<PinContainer>{project.title}</PinContainer>
					</div>
				))}
			</div>
		</div>
	);
};
