"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // Importa SweetAlert2
import "../../styles/StylesAddQuery.css";

const AddQuerry = () => {
    const navigate = useRouter();

    const miNombre = "Jhair Alejandro Cruz Palacios"; //esta es la variable para el usuario principal
    const [nombre, setNombre] = useState("");
    const [apellidoPaterno, setApellidoPaterno] = useState("");
    const [apellidoMaterno, setApellidoMaterno] = useState("");
    const [edad, setEdad] = useState("");
    const [motivo, setMotivo] = useState("");
    const [fecha, setFecha] = useState("");

    function citaAction(event) {
        event.preventDefault(); // Previene que se actualice la pagina cuando se ingresa un dato erroneo

        if (nombre === "" || apellidoPaterno === "" || apellidoMaterno === "" || isNaN(edad) || edad < 0 || !/^\d{2}\/\d{2}\/\d{4}$/.test(fecha)) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Por favor, complete todos los campos correctamente."
            });
        } else {
            Swal.fire({
                icon: "success",
                title: "Cita agregada",
                text: `Nombre: ${nombre}\nApellido Paterno: ${apellidoPaterno}\nApellido Materno: ${apellidoMaterno}\nEdad: ${edad}\nFecha: ${fecha}`
            });

            // Después de 2 segundos, la página se refrescará
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }



    const nombreFuntion = (event) => {
        // Validar que no se ingresen números
        if (!/\d/.test(event.target.value)) {
            setNombre(event.target.value);
        }
    };

    const apellidoPaternoFuntion = (event) => {
        // Validar que no se ingresen números
        if (!/\d/.test(event.target.value)) {
            setApellidoPaterno(event.target.value);
        }
    };

    const apellidoMaternoFuntion = (event) => {
        // Validar que no se ingresen números
        if (!/\d/.test(event.target.value)) {
            setApellidoMaterno(event.target.value);
        }
    };

    const edadFuntion = (event) => {
        // Validar que no se ingresen letras ni números negativos
        const value = event.target.value;
        if (!isNaN(value) && value >= 0) {
            setEdad(value);
        }
    };

    const motivoFuntion = (event) => {
        setMotivo(event.target.value);
    };

    const handleFechaChange = (event) => {
        setFecha(event.target.value); // falta completar las validaciones para solo números
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
                                value={nombre}
                                onChange={nombreFuntion}
                            />
                            <span>Nombre(s)</span>
                        </label>

                        <label>
                            <input
                                className="input"
                                type="text"
                                placeholder=""
                                required=""
                                value={apellidoPaterno}
                                onChange={apellidoPaternoFuntion}
                            />
                            <span>Apellido Paterno</span>
                        </label>

                        <label>
                            <input
                                className="input"
                                type="text"
                                placeholder=""
                                required=""
                                value={apellidoMaterno}
                                onChange={apellidoMaternoFuntion}
                            />
                            <span>Apellido Materno</span>
                        </label>

                        <label>
                            <input
                                className="input"
                                type="text"
                                placeholder=""
                                required=""
                                value={edad}
                                onChange={edadFuntion}
                            />
                            <span>Edad</span>
                        </label>

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

                        <button onClick={citaAction} className="submit">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddQuerry;
