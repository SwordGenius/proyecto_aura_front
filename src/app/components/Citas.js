import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/StylesCitas.css"

const Citas = () => {
    const navigate = useRouter();
    const [notaDelUsuario, setNotaDelUsuario] = useState('');
    const miNombre = "Jhair Alejandro Cruz Palacios";
    const nombrePaciente = "Manuel";
    const motivo = "Endodoncia";
    const fecha = "10/10/10";
    const edad = "20";
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const cardsPerPage = 9;

    function nextPage() {
        setCurrentCardIndex(currentCardIndex + cardsPerPage);
    }

    function prevPage() {
        setCurrentCardIndex(currentCardIndex - cardsPerPage);
    }

    const cardData = [{
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    }
    ]


    return (
        <div className="citas-contenedor">

            <div className="seccion-usuario1">
                <h2>Citas disponibles </h2>
                <h2>Hola, {miNombre}</h2>
            </div>

            <div className="contenedor-tarjetas">

                {cardData
                    .slice(currentCardIndex, currentCardIndex + cardsPerPage)
                    .map((data, index) => (
                        <div className="tarjeta-notificacion" key={index}>
                            <div className="brillo-tarjeta"></div>
                            <div className="bordo-brillo-tarjeta"></div>
                            <div className="titulo-notificacion">Motivo: {data.motivo}</div>
                            <div className="cuerpo-notificacion">Fecha: {data.fecha}</div>
                            <div className="titulo-notificacion">Nombre: {data.name}</div>
                            <div className="cuerpo-notificacion">Edad: {data.edad}</div>
                        </div>
                    ))}

            </div>

            <div className="pagination-button">
                {currentCardIndex > 0 && (
                    <button className="btns-sig-atr" onClick={prevPage}>Atrás</button>
                )}
                {currentCardIndex + cardsPerPage < cardData.length && (
                    <button className="btns-sig-atr"  onClick={nextPage}>Siguiente</button>
                )}
            </div>


        </div>

    );
};
export default Citas;
