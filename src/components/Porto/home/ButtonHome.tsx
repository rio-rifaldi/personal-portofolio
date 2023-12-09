import {useMedia} from "react-use";
import {Button} from "../../ui/button";

type Props = {};

function ButtonHome({}: Props) {
	const islarge = useMedia("(min-width: 674px)");
	return (
		<>
			<Button
				className={`capitalize text-xs sm:text-base`}
				size={islarge ? "lg" : "sm"}
			>
				<a href="#">download CV</a>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					className="lucide lucide-download ml-2"
				>
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
					<polyline points="7 10 12 15 17 10"></polyline>
					<line
						x1="12"
						x2="12"
						y1="15"
						y2="3"
					></line>
				</svg>
			</Button>
			<Button
				className="capitalize text-xs sm:text-base"
				variant={"link"}
				size={islarge ? "lg" : "sm"}
			>
				<a href="#about">view more</a>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					className="lucide lucide-arrow-up-right ml-2"
				>
					<path d="M7 7h10v10"></path>
					<path d="M7 17 17 7"></path>
				</svg>
			</Button>
		</>
	);
}

export default ButtonHome;
