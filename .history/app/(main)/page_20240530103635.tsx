import { Hero } from "@/components/global/hero";

const MainPage = () => {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-10 px-5">
			<div className="max-w-7xl w-full">
				<Hero />
			</div>
		</main>
	);
};

export default MainPage;
