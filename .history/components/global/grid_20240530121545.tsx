import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { gridItems } from "@/data";

export const Grid = () => {
	return (
		<section id="about">
			<BentoGrid>
				{gridItems.map((item, i) => (
					<BentoGridItem
						id={item.id}
						key={i}
						title={item.title}
						description={item.description}
						// className={item.className}
						// img={item.img}
						// imgClassName={item.imgClassName}
						// titleClassName={item.titleClassName}
						// spareImg={item.spareImg}
					/>
				))}
			</BentoGrid>
		</section>
	);
};
