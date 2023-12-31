"use client"
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // Importa SweetAlert2
import "../../styles/StylesAddQuery.css";
import axios from "axios";

const AddQuerry = () => {
    const navigate = useRouter();
    const [clientes, setClientes] = useState(["Cliente 1", "Cliente 2", "Cliente 3"]);

    const miNombre = "Jhair Alejandro Cruz Palacios"; // Esta es la variable para el usuario principal
    const [motivo, setMotivo] = useState("");
    const [fecha, setFecha] = useState("");
    const [isClientListModalOpen, setIsClientListModalOpen] = useState(false);
    const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);
    const [id, setId] = useState(0);
    const [clientInfo, setClientInfo] = useState({
        nombres: "",
        apellido_P: "",
        apellido_M: "",
        edad: ""
    });

    const asignarCliente = (event, data) => {
        event.preventDefault();
        setId(data.id_cliente);
        console.log(id)
    }
    const cargarClientes = async () => {
        try {
            await axios.get("http://50.16.134.143:3300/clientes", {withCredentials: true}).then((response) => {
                console.log(response);
                let clientes = response.data.data;
                setClientes(clientes);
                console.log(clientes);
            }).catch((error) => {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        cargarClientes().then(r => console.log("Clientes cargados"));
    }, [clientInfo]);
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
        try {
            axios.post("http://50.16.134.143:3300/clientes", clientInfo, {withCredentials: true}).then((response) => {
                console.log(response);
                Swal.fire(
                    'Exito',
                    'Su cliente se a guardado',
                    'success'
                )
                setId(response.data.id);
            }).catch((error) => {
                console.log(error);
                Swal.fire(
                    'Error',
                    'Su cliente no se a guardado',
                    'error'
                )
            });
        } catch (error) {
            console.log(error);
        }

        closeClientListModal();
    };

    const seleccionarCliente = () => {

        closeAddClientModal();
    };

    const citaAction = (event) => {
        event.preventDefault();

        try {
            axios.post("http://50.16.134.143:3300/citas", {
                motivo: motivo,
                fecha: fecha,
                id_cliente: id
            }, {withCredentials: true}).then((response) => {
                console.log(response);
                Swal.fire(
                    'Exito',
                    'Su cita se a guardado',
                    'success'
                )
            }).catch((error) => {
                console.log(error);
                Swal.fire(
                    'Error',
                    'Su cita no se a guardado',
                    'error'
                )
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="query-container">
            <div className="seccion-usuario2">
                <h2>Citas disponibles </h2>
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
                                            <div key={index}>
                                                <li key={index}>{cliente.nombre}</li>
                                                <button onClick={(event) => asignarCliente( event, cliente)}>Seleccionar</button>
                                            </div>
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
