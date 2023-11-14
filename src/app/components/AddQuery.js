// Importa las bibliotecas y estilos necesarios
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // Importa SweetAlert2
import "../../styles/StylesAddQuery.css";

// Componente principal
const AddQuerry = () => {
    const navigate = useRouter();
    const [clientes, setClientes] = useState(["Cliente 1", "Cliente 2", "Cliente 3"]);

    const miNombre = "Jhair Alejandro Cruz Palacios"; // Esta es la variable para el usuario principal
    const [motivo, setMotivo] = useState("");
    const [fecha, setFecha] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);

    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const citaAction = (event) => {
        event.preventDefault();

        alert("listo")
    };

    const nombreFuntion = (event) => {
        if (!/\d/.test(event.target.value)) {
            setNombre(event.target.value);
        }
    };

    const apellidoPaternoFuntion = (event) => {
        if (!/\d/.test(event.target.value)) {
            setApellidoPaterno(event.target.value);
        }
    };

    const apellidoMaternoFuntion = (event) => {
        if (!/\d/.test(event.target.value)) {
            setApellidoMaterno(event.target.value);
        }
    };

    const edadFuntion = (event) => {
        const value = event.target.value;
        if (!isNaN(value) && value >= 0) {
            setEdad(value);
        }
    };

    const motivoFuntion = (event) => {
        setMotivo(event.target.value);
    };

    const handleFechaChange = (event) => {
        setFecha(event.target.value);
    };

    // Nombres de prueba
    const clientesDePrueba = ["Cliente 1", "Cliente 2", "Cliente 3"];

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
                                onChange={motivoFuntion}
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
                                onChange={handleFechaChange}
                            />
                            <span>Fecha</span>
                        </label>

                        <button type="button" className="submit" onClick={openModal}>
                            Seleccionar Cliente
                        </button>
                        <button onClick={citaAction} className="submit">
                            Agregar Cita
                        </button>

                        {isModalOpen && (
                            <div className="modal-container">
                                <div className="modal-content">
                                    <span className="modal-close" onClick={closeModal}>
                                        &times;
                                    </span>
                                    <p>Lista de clientes</p>
                                    <ul>
                                        {clientes.map((cliente, index) => (
                                            /*aqui se muestra la ingotmacion, cree una varibale con datos como prueba*/

                                            <li key={index}>{cliente}</li>
                                        ))}
                                    </ul>
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
