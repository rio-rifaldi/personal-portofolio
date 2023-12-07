import {AnimatePresence, motion} from "framer-motion";
import {Squash as Hamburger} from "hamburger-react";
import {useRef, useState} from "react";
import {useClickAway} from "react-use";

import {Hero} from "../../../../content.json";

type Props = {};

function Navbar({}: Props) {
	const [isOpen, setOpen] = useState(false);
	const ref = useRef(null);

	useClickAway(ref, () => setOpen(false));

	const menus = [
		{title: "home", path: "#home"},
		{title: "about", path: "#about"},
		{title: "services", path: "#services"},
		{title: "product", path: "#product"},
		{title: "contact", path: "#contact"},
	];

	return (
		<div
			ref={ref}
			className=" flex justify-between px-4 shadow-none py-4 lg:pt-7 lg:px-12 "
		>
			<img
				src={Hero.logos}
				alt="logos"
				className="w-8 relative z-30"
			/>
			<div className="hidden lg:flex items-center justify-between w-full xl:max-w-[60%] max-w-[75%]   ">
				<ul className="flex gap-20 ">
					{Hero.navbar.map((menu) => (
						<>
							<a
								href={menu.path}
								className=" font-Hanken hover:text-blue-700"
							>
								{menu.title}
							</a>
						</>
					))}
				</ul>
				<button className="bg-blue-600 hover:bg-blue-700 text-white font-Hanken text-base py-2 px-4 rounded">Get in touch</button>
			</div>
			<div className="lg:hidden">
				<div className="relative z-30">
					<Hamburger
						toggled={isOpen}
						size={20}
						toggle={setOpen}
					/>
				</div>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							transition={{duration: 0.2}}
							className="fixed left-0 shadow-4xl right-0 top-0 p-5 pt-12 bg-white border-b border-b-white/20 z-20"
						>
							<ul className="grid gap-2 mt-7">
								{menus.map((route) => {
									return (
										<motion.li
											initial={{scale: 0, opacity: 0}}
											animate={{scale: 1, opacity: 1}}
											transition={{
												type: "spring",
												stiffness: 260,
												damping: 20,
												delay: 0.1 + 2 / 10,
											}}
											key={route.title}
											className="w-full p-[0.08rem] rounded-xl "
										>
											<a
												onClick={() => setOpen((prev) => !prev)}
												className={"flex items-center justify-between w-full p-3 rounded-xl hover:underline hover:underline-offset-4 "}
												href={route.path}
											>
												<span className="flex gap-1 text-lg">{route.title}</span>
											</a>
										</motion.li>
									);
								})}
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}

export default Navbar;
