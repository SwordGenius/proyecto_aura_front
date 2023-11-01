"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/StylesConfiguracion.css";

const Contfiguracion = () => {
    const navigate = useRouter();
    const [content, setContent] = useState(null);

    function eliminar() {
        alert("eliminar")
    }

    function modificar() {
        alert("modificar")
    }

    return (
        <div className="container-Configuracion">
            <h1 className="titulo">configuracion del perfil</h1>

            <div className="centered-card">

            <div className="carduser">
                <div className="card-info">
                    <div className="card-avatar"></div>
                    <div className="card-title">Jhair Alejandro</div>
                    <div className="card-subtitle">Desarrollador de software</div>
                </div>
                <ul className="card-social">
                    <li onClick={eliminar}  className="card-social__item">
                        Eliminar Cuenta

                    </li>

                    <li onClick={modificar} className="card-social__item">
                        Modificar
                    </li>
                </ul>
            </div>
            </div>

        </div>
    );
};

export default Contfiguracion;
