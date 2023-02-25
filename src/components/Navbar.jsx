export default function Navbar() {
	return (
		<nav className="h-24 flex justify-between items-center container mx-auto py-4 ">
			<div className="flex items-center gap-3 ">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
					alt=""
					className="object-contain h-16 w-16"
				/>
				<h3 className="text-3xl">Pablo.js</h3>
			</div>
			<div className="flex gap-4 hidden md:block">
				<button className="hover:text-gray-300">{"<Sobre mi />"}</button>
                <button className="hover:text-gray-300">{"<Github />"}</button>
                <button className="hover:text-gray-300">{"<LinkedIn />"}</button>
			</div>
		</nav>
	);
}
