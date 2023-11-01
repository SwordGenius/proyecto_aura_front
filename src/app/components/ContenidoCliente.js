"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/StylesContenidoCliente.css";

const ContenidoCliente = () => {
    const navigate = useRouter();
    const [content, setContent] = useState(null);

    return (
        <div className="container-pacientes">

                <p>contenido cliente</p>

        </div>
    );
};

export default ContenidoCliente;
