import { useEffect } from "react";

export default function Navbar() {
	useEffect(() => {
		const nav = document.querySelector("nav");
		const sticky = nav.offsetTop;
		
		const scrollCallBack = window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				nav.classList.add("bg-gray-900");
			} else if (window.scrollY < 100) {
				nav.classList.remove("bg-gray-900");
			}
		});
		return () => {
			window.removeEventListener("scroll", scrollCallBack);
		};
	}, []);
	return (
		<nav className="h-20 flex justify-around items-center py-4  transition duration-300 z-20">
			<div className="flex items-center gap-3 ">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
					alt=""
					className="object-contain h-16 w-16"
				/>
				<h3 className="text-3xl">Pablo.js</h3>
			</div>
			<div className=" gap-2 hidden md:flex">
				<button className="hover:text-gray-300">{"<Sobre mi />"}</button>
                <button className="hover:text-gray-300">{"<Github />"}</button>
                <button className="hover:text-gray-300">{"<LinkedIn />"}</button>
			</div>
		</nav>
	);
}
