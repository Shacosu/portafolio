import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ModalComponent({ show, handleClose }) {
	return (
		<Modal show={show} onHide={handleClose} backdrop="static"  className="text-black">
			<Modal.Header closeButton>
				<Modal.Title>Contactar por email</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form action="">
                    <label className="block">Nombre</label>
                    <input type="text" placeholder="Nombre..." className="border p-1 px-2 w-full" />
                    <label className="block">Asunto</label>
                    <input type="text" placeholder="Asunto..." className="border p-1 px-2 w-full"/>
                    <label className="block">Nombre</label>
                    <textarea name="" id="" rows="4" placeholder="Escriba su contenido..." className="border p-1 px-2 w-full"></textarea>
                </form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Cerrar
				</Button>
				<Button variant="primary">Enviar</Button>
			</Modal.Footer>
		</Modal>
	);
}
