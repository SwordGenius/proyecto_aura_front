"use client"
import React from "react";
import { useRouter } from "next/navigation";
import "../../styles/StylesDocumentos.css"
import Sidebar from "./Sidebar"
import Image from "next/image";
const Documentos = () => {
    const navigate = useRouter();
    function funtionAtras() {
        navigate.push('/contenidoClienteLink');
    }

    const dataExample = [
        {
            id: 1,
            info: 'Juan',
            img: 25,
        },
        {
            id: 2,
            info: 'Juan',
            img: 25,
        },
        {
            id: 3,
            info: 'Juan',
            img: 25,
        },
        {
            id: 4,
            info: 'Juan',
            img: 25,
        },
        {
            id: 5,
            info: 'Juan',
            img: 25,
        },
        {
            id: 6,
            info: 'Juan',
            img: 25,
        },
        {
            id: 7,
            info: 'Juan',
            img: 25,
        },
        {
            id: 8,
            info: 'Juan',
            img: 25,
        },
        
        
    ]

    return (
        <>
            <div className="container-home">
                    <button onClick={funtionAtras} className="custom-button">Regresar</button>
                    <div className="column-center">
                        <div>
                            <h3>Documentos</h3>
                        </div>
                        <div className="pdf-section">
                            <div className="pdf-grid">
                                {dataExample.map((pdf) => (
                                    <div key={pdf.id} className="pdf-item">
                                        <Image 
                                        width={70}
                                        height={70}
                                        src="/pdf.png" alt="pdfimg" />
                                        <p>{pdf.info}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
};
export default Documentos;
