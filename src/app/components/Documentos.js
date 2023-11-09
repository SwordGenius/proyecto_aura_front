"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/StylesDocumentos.css"
const Documentos = () => {
    const navigate = useRouter();
    const nombreUsuario = "Jhair Alejandro Cruz Palacios";

    function funtionAtras() {
        navigate.push('/contenidoClienteLink');
    }

    return (
        <div className="documentos-container">
            <button onClick={funtionAtras} className="buttonback">Regresar</button>

            <h1 className="tituloDocumentos">Estos son tus documentos disponibles</h1>
        </div>

    );
};
export default Documentos;



