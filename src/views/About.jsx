import React from "react";

export default function About() {
	return (
		<div className="">
			<span className="text-3xl border-b italic">Conoce mas sobre mi</span>
			<div className="grid grid-cols-12">
				<div className="col-span-12 w-6/12">
					<h3 className="text-xl mt-4 italic"># Introducción</h3>
                    <ul className="leading-7 ml-4 list-disc">
						<li>
						Como ya habrás visto anteriormente mi nombre es Pablo Espinoza y un apasionado
						por el mundo de la tecnología que actualmente se encuentra aprendiendo cada vez
						mas sobre lo que mas le gusta. <br />
						Actualmente me encuentro cursando los últimos semestres de universidad mientras
						aprovecho cada tiempo libre que tengo para programar y aprender mucho mas.
						</li>
					</ul>
				</div>

				<div className="col-span-12 w-6/12">
					<h3 className="text-xl mt-4 italic"># Experiencia </h3>
					<ul className="leading-7 ml-4 list-disc">
						<li>
							En mis años de estudio he pasado por varias experiencias tales como la creación
							de un APP de celular que al final no se pudo llevar a cabo, pero aprendí mucho
							en su maquetación, luego de eso me dedique a crear BOT's de discord con{" "}
							<b>Node.Js</b> a lo que también le añadí base de datos en su momento utilice{" "}
							<b>MYSQL</b> en ello me fue bastante bien logre aprender sobre estas tecnologías
							y aproveche en su momento el potencial.
						</li>
						<li>
							Paso un tiempo y en mi búsqueda de crecimiento encontré un trabajo, esta empresa
							se dedicaba a la venta E-commerce, en la cual yo entre directamente al grupo de
							TI, aquí yo sin conocer mayormente las herramientas que utilizaban me desafié y
							aprendí sobre <b>Web Scraping (Puppeteer)</b>, <b>MSSQL</b>, <b>ASP Classic</b>,
							el manejo y creación de <b>API REST</b> y sobre todo Javascript que sería la
							base de todo.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
