"use client"
import React, { useState, useEffect} from "react";
import "../../styles/StylesHistorial.css"
import Link from "next/link";
import axios from "axios";
import {useSearchParams} from "next/navigation";
const Historial = () => {

    const [isLoading, setisLoading] = useState(true);
    const [isInformation, setisInformation] = useState(false);
    const [response, setResponse] = useState(false);   //falta conectarlo al back para que cuando haya informacion si muestre la info y cuando no tenga nada de info muestre ese loading
    const [data, setData] = useState([]);
    const search = useSearchParams();

    const cargarHistorial = async () =>{
        try{
            const id = search.get("id");
            const response = await axios.get(`http://50.16.134.143:3300/historial?${id}`,{
                withCredentials: true,
            })
            let historial = response.data.data;
            setData(historial);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() =>{
        cargarHistorial().then(r => console.log(r));
        setTimeout(() =>{
            setisLoading(false)
        },1000);
        if(response){
            setisInformation(true)
        }
    })


    const dataExample = [
        {
            id: 1,
            nombre: 'Juan',
            motivo: 'Endodoncia',
            fecha: '24/12/23',
            comentario: 'dientes sucios con caries'
        },
        {
            id: 5,
            nombre: 'Juan',
            motivo: 'Endodoncia',
            fecha: '24/12/23',
            comentario: 'dientes sucios con caries'
        },
        {
            id: 6,
            nombre: 'Juan',
            motivo: 'Endodoncia',
            fecha: '24/12/23',
            comentario: 'dientes sucios con caries'
        },
        {
            id: 7,
            nombre: 'Juan',
            motivo: 'Endodoncia',
            fecha: '24/12/23',
            comentario: 'dientes sucios con caries'
        },
        {
            id: 8,
            nombre: 'Juan',
            motivo: 'Endodoncia',
            fecha: '24/12/23',
            comentario: 'dientes sucios con caries'
        }
    ];

    if(isLoading){
        return (
            <>
            <div className="container-historial">
            <Link  href="/contenidoClienteLink" className="custom-button">Regresar</Link>
                    <div className="column-center">
                        <div>
                            <h3>Historial</h3>
                        </div>
                        <div className="historial-section">
                        <div className="loadingnoInfo">
                            <p>Cargando</p>
                        </div>
                        </div>
                    </div>
            </div>
        </>
        )
    }


    if(isInformation){
        return (
            <>
            <div className="container-home">
            <Link  href="/contenidoClienteLink" className="custom-button">Regresar</Link>
                    <div className="column-center">
                        <div>
                            <h3>Historial</h3>
                        </div>
                        <div className="historial-section">
                        <div className="loadingnoInfo">
                            <p>No hay historial disponible</p>
                        </div>
                        </div>
                    </div>
            </div>
        </>
        )
    }

    return (
        <>
            <div className="container-home">
            <Link  href="/contenidoClienteLink" className="custom-button">Regresar</Link>
                    <div className="column-center">
                        <div>
                            <h3>Historial</h3>
                        </div>
                        <div className="historial-section">
                            <div className="historial-grid">
                                {data.map((historial, index) => (
                                    <div key={index} className="historial-item">
                                        <p>Nombre: {historial.diagnostico}</p>
                                        <p>Motivo: {historial.motivo}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
};
export default Historial;
