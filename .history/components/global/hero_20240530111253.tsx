import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BorderMagicButton } from "@/components/ui/border-magic-button";

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
			<div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div>
			<div className="flex justify-center relative my-20 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<h2 className="capitalize tracking-widest text-sm text-center text-blue-100 max-w-80">
						I design and develop experiences that make people&apos;s
						lives <span className="font-bold">Simple</span>
					</h2>
					<TextGenerateEffect
						className="text-center text-[40px] md:text-5xl lg:text-6xl"
						words="Transforming Concepts into Seamless User Experiences"
					/>
					<p className="text-center md:tracking-wider mb-4 text-sm md:text-base lg:text-lg">
						Hi, I&apos;m Emmanuel - A Full-Stack Software Developer
						from Zimbabwe. Proficient in Python, Next.js,
						TypeScript, and React for both backend and frontend
						development.
					</p>
					<a href="#about">
						<BorderMagicButton title="Show my work" />
					</a>
				</div>
			</div>
		</div>
	);
};
