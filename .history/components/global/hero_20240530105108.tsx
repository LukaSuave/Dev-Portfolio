import { Spotlight } from "@/components/ui/spotlight";

export const Hero = () => {
	return (
		<div className="pb-20 pt-36">
			<div>
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="top-10 left-full  h-[80ch] w-[50vw]"
					fill="purple"
				/>
				<Spotlight
					className="top-28 left-80 w-[50vw] h-[80vh]"
					fill="blue"
				/>
			</div>
			<div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex items-center justify-center">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div>
		</div>
	);
};
