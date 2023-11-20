"use client"
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
        id: 1,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
        
    },{
        id: 2,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        id: 3,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        id: 4,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        id:5,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        id: 6,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        id: 7,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        id: 8,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        id: 9,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        id: 10,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    }
    ]


    return (
        <div className="citas-container">

            <div className="user">
                <h2>Citas disponibles </h2>
                <h2>Hola, {miNombre}</h2>
            </div>

            <div className="card-container">

                {cardData
                    .slice(currentCardIndex, currentCardIndex + cardsPerPage)
                    .map((data) => (    
                        <div className="notification" key={data.id}>
                            <div className="notiglow"></div>
                            <div className="notiborderglow"></div>
                            <div className="notititle">Motivo: {data.motivo}</div>
                            <div className="notibody">Fecha: {data.fecha}</div>
                            <div className="notititle">Nombre: {data.name}</div>
                            <div className="notibody">Edad: {data.edad}</div>
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



