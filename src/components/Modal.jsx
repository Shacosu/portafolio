import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalComponent({ show, handleClose }) {
	return (
		<Modal
			show={show}
			onHide={handleClose}
			backdrop="static"
			className="text-black"
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title>
					<h3 className="font-bold italic ">Contactar por email</h3>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form>
					<label className="block font-bold mb-1">Nombre</label>
					<input
						type="text"
						placeholder="Nombre..."
						className="border p-2  w-full rounded border-2 border-dark"
					/>
					<label className="block font-bold mt-1">Correo</label>
					<input
						type="text"
						placeholder="Correo..."
						className="border p-2  w-full rounded border-2 border-dark"
					/>
					<label className="block font-bold mt-1">Asunto</label>
					<input
						type="text"
						placeholder="Asunto..."
						className="border p-2  w-full rounded border-2 border-dark"
					/>
					<label className="block font-bold mt-1">Contenido</label>
					<textarea
						name=""
						id=""
						rows="4"
						placeholder="Escriba su contenido..."
						className="border p-2  w-full resize-none rounded border-2 border-dark"
					></textarea>
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button className="bg-transparent border-0 text-black " onClick={handleClose}>
					<span className="font-bold">Cerrar</span>
				</Button>
				<Button className="bg-dark border-0">Enviar</Button>
			</Modal.Footer>
		</Modal>
	);
}
