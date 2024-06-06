/* eslint-disable @next/next/no-img-element */
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";
import React from "react";

export const Clients = () => {
	return (
		<div className="py-20" id="testimonials">
			<h1 className="heading">
				Kind Words from{" "}
				<span className="text-blue-600">Satisfied Clients</span>
			</h1>
			<div className="flex flex-col items-center max-lg:mt-10">
				<InfiniteMovingCards
					items={testimonials}
					direction="right"
					speed="slow"
				/>
				<div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
					{companies.map((company) => (
						<React.Fragment key={company.id}>
							<div className="flex md:max-w-60 max-w-32 gap-2">
								<img
									src={company.img}
									alt={company.name}
									className="md:w-10 w-5"
								/>
								<p className="ml-2 capitalize text-lg">
									{company.name}
								</p>
							</div>
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	);
};
