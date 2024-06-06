import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data";

export const Clients = () => {
	return (
		<div className="py-20" id="projects">
			<h1 className="heading">
				Kind Words from{" "}
				<span className="text-blue-600">Satisfied Clients</span>
			</h1>
			<div className="flex flex-col items-center">
				<div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
					<InfiniteMovingCards
						items={testimonials}
						direction="right"
						speed="slow"
					/>
				</div>
			</div>
		</div>
	);
};
