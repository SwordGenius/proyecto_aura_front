"use client"
import React from "react";
import { useRouter } from "next/navigation";
import "../../styles/StylesHistorial.css"
import Sidebar from "./Sidebar"
const Historial = () => {
    const navigate = useRouter();
    function funtionAtras() {
        navigate.push('/contenidoClienteLink');
    }

    const dataExample = [
        {
            id: 1,
            nombre: 'Juan',
            motivo: 'Endodoncia',
            fecha: '24/12/23',
            comentario: 'dientes sucios con caries'
        },
        {
            id: 1,
            nombre: 'Juan',
            motivo: 'Endodoncia',
            fecha: '24/12/23',
            comentario: 'dientes sucios con caries'
        },
        {
            id: 1,
            nombre: 'Juan',
            motivo: 'Endodoncia',
            fecha: '24/12/23',
            comentario: 'dientes sucios con caries'
        },
        {
            id: 1,
            nombre: 'Juan',
            motivo: 'Endodoncia',
            fecha: '24/12/23',
            comentario: 'dientes sucios con caries'
        },
        {
            id: 1,
            nombre: 'Juan',
            motivo: 'Endodoncia',
            fecha: '24/12/23',
            comentario: 'dientes sucios con caries'
        }
    ];

    return (
        <>
            <div className="container-home">
                <Sidebar name ='Historial' />
                <button onClick={funtionAtras} className="custom-button">Regresar</button>
                <section className="section-right">
                    <div className="column-center">
                        <div>
                            <h3>Historial</h3>
                        </div>
                        <div className="pdf-section">
                            <div className="pdf-grid">
                                {dataExample.map((historial) => (
                                    <div key={historial.id} className="pdf-item">
                                        <p>Nombre: {historial.nombre}</p>
                                        <p>Motivo: {historial.motivo}</p>
                                        <p>Fecha: {historial.fecha}</p>
                                        <p>Comentario: {historial.comentario}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
export default Historial;
