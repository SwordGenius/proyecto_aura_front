import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // Importa SweetAlert2
import "../../styles/StylesAddQuery.css";

const AddQuerry = () => {
    const navigate = useRouter();
    const [clientes, setClientes] = useState(["Cliente 1", "Cliente 2", "Cliente 3"]);

    const miNombre = "Jhair Alejandro Cruz Palacios"; // Esta es la variable para el usuario principal
    const [motivo, setMotivo] = useState("");
    const [fecha, setFecha] = useState("");
    const [isClientListModalOpen, setIsClientListModalOpen] = useState(false);
    const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);
    const [clientInfo, setClientInfo] = useState({
        nombres: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        edad: ""
    });

    const openClientListModal = () => {
        setIsAddClientModalOpen(false); // Cerrar el modal de Agregar Cliente
        setIsClientListModalOpen(true);
    };

    const closeClientListModal = () => {
        setIsClientListModalOpen(false);
    };

    const openAddClientModal = () => {
        setIsClientListModalOpen(false); // Cerrar el modal de Lista de Clientes
        setIsAddClientModalOpen(true);
    };

    const closeAddClientModal = () => {
        setIsAddClientModalOpen(false);
    };

    const handleNameChange = (event) => {
        setClientInfo({ ...clientInfo, nombres: event.target.value });
    };

    const handleLastNameChange = (event) => {
        setClientInfo({ ...clientInfo, apellidoPaterno: event.target.value });
    };

    const handleMaternoChange = (event) => {
        setClientInfo({ ...clientInfo, apellidoMaterno: event.target.value });
    };

    const handleEdadChange = (event) => {
        setClientInfo({ ...clientInfo, edad: event.target.value });
    };

    const agregarCliente = () => {
        alert("cliente agregado");
        closeClientListModal();
    };

    const seleccionarCliente = () => {
        alert("seleccion cliente");
        closeAddClientModal();
    };

    const citaAction = (event) => {
        event.preventDefault();

        alert("listo");
    };

    return (
        <div className="query-container">
            <div className="user">
                <h2>Agregar citas</h2>
                <h2>Hola, {miNombre}</h2>
            </div>

            <div className="center-container">
                <div className="contenedorForm">
                    <form className="form">
                        <p className="title">Ingrese los datos de la cita</p>

                        <label>
                            <input
                                className="input"
                                type="text"
                                placeholder=""
                                required=""
                                value={motivo}
                                onChange={(e) => setMotivo(e.target.value)}
                            />
                            <span>Motivo</span>
                        </label>

                        <label>
                            <input
                                className="input"
                                type="date"
                                placeholder="xx/xx/xxxx"
                                required=""
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                            />
                            <span>Fecha</span>
                        </label>

                        <button type="button" className="submit" onClick={openClientListModal}>
                            Seleccionar Cliente
                        </button>
                        <button onClick={citaAction} className="submit">
                            Agregar Cita
                        </button>

                        <button type="button" className="submit" onClick={openAddClientModal}>
                            Agregar Cliente
                        </button>

                        {/* Modal para Lista de Clientes */}
                        {isClientListModalOpen && (
                            <div className="modal-container">
                                <div className="modal-content1">
                                    <span className="modal-close1" onClick={closeClientListModal}>
                                        &times;
                                    </span>
                                    <p>Lista de clientes</p>
                                    <ul>
                                        {clientes.map((cliente, index) => (
                                            <li key={index}>{cliente}</li>
                                        ))}
                                    </ul>
                                    <button type="button" onClick={seleccionarCliente}>
                                        Aceptar
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Modal para Agregar Cliente */}
                        {isAddClientModalOpen && (
                            <div className="modal-container">
                                <div className="modal-content1">
                                    <span className="modal-close1" onClick={closeAddClientModal}>
                                        &times;
                                    </span>
                                    <h2>Agregar Cliente</h2>
                                    <label>Nombres:</label>
                                    <input
                                        type="text"
                                        value={clientInfo.nombres}
                                        onChange={handleNameChange}
                                    />
                                    <label>Apellido Paterno:</label>
                                    <input
                                        type="text"
                                        value={clientInfo.apellidoPaterno}
                                        onChange={handleLastNameChange}
                                    />
                                    <label>Apellido Materno:</label>
                                    <input
                                        type="text"
                                        value={clientInfo.apellidoMaterno}
                                        onChange={handleMaternoChange}
                                    />
                                    <label>Edad:</label>
                                    <input
                                        type="text"
                                        value={clientInfo.edad}
                                        onChange={handleEdadChange}
                                    />
                                    <button type="button" onClick={agregarCliente}>
                                        Aceptar
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddQuerry;
