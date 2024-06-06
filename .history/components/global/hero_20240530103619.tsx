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
		</div>
	);
};