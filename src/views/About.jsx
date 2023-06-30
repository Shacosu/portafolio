import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function About() {
	return (
		<div className="">
			<span className="text-3xl border-b italic ">Conoce mas sobre mi</span>
			<div className="grid grid-cols-12 gap-x-4">
				<div className="col-span-7 ">
					<h3 className="text-xl mt-4 italic "># Introducción</h3>
					<ul className="text-sm">
						<li className="rounded   ">
							Como ya habrás visto anteriormente mi nombre es Pablo Espinoza y soy un apasionado
							por el mundo de la tecnología que actualmente se encuentra aprendiendo cada vez
							mas sobre lo que mas le gusta. <br /><br />
							
							Actualmente me encuentro cursando los últimos semestres de universidad mientras
							aprovecho cada tiempo libre que tengo para programar, hacer cursos y capacitarme
							cada dia mas en el desarrollo de software.
						</li>
					</ul>

					<h3 className="text-xl mt-4 italic "># Experiencia </h3>
					<ul className="space-y-3 text-sm">
						<li className="rounded ">
							En mis años de estudio he pasado por varias experiencias tales como la creación
							de un APP de celular que al final no se pudo llevar a cabo, pero aprendí mucho
							en su maquetación. <br /><br />
							Luego de eso me dedique a crear BOT's de discord con{" "}
							<b>Node.Js</b> a lo que también le añadí base de datos en su momento utilice{" "}
							<b>MYSQL</b> en ello me fue bastante bien logre aprender sobre estas tecnologías
							y aproveche en su momento el potencial.
						</li>
						<li className="rounded ">
							Paso un tiempo y en mi búsqueda de crecimiento encontré un trabajo, esta empresa
							se dedicaba a la venta E-commerce, en la cual yo entre directamente al grupo de
							TI, aquí yo sin conocer mayormente las herramientas que utilizaban me desafié...<br /><br />

							Aprendí sobre <b>Web Scraping (Puppeteer)</b>, <b>MSSQL</b>, <b>ASP Classic</b>,
							el manejo y creación de <b>API REST</b> y sobre todo Javascript que sería la
							base de todo.
						</li>
					</ul>
				</div>

				<div className="col-span-5 align-self-center">
					<h3 className="text-3xl text-center italic mb-4">
						<span className="border-b">Proyectos</span>
					</h3>
					<Carousel>
						<Carousel.Item>
							<img
								className="d-block w-100 rounded"
								src="https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&fit=max"
								alt="First slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<a href="https://krapygames.lat" target="_blank">
								<img
									className="d-block w-100 rounded object-cover "
									src="https://cdn.discordapp.com/attachments/1094167571932123178/1124214620547207188/image.png"
									alt="krapyGames"
								/>
							</a>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100 rounded"
								src="https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&fit=max"
								alt="Third slide"
							/>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		</div>
	);
}
