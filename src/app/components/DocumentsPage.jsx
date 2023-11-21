"use client"
import React, {useState, useEffect} from "react";
import "../../styles/StylesDocumentos.css"
import Image from "next/image";
import Link from "next/link";
const Documentos = () => {

    const [isLoading, setisLoading] = useState(true);
    const [isInformation, setisInformation] = useState(false);
    const [response, setResponse] = useState(false);

    useEffect(() =>{
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

    if(isLoading){
        return (
            <>
            <div className="container-documentos">
            <Link  href="/contenidoClienteLink" className="custom-button">Regresar</Link>
                    <div className="column-center">
                        <div>
                            <h3>Documentos</h3>
                        </div>
                        <div className="pdf-section">
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
                            <h3>Documentos</h3>
                        </div>
                        <div className="pdf-section">
                        <div className="loadingnoInfo">
                            <p>No hay documentos disponible</p>
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
                        <h3>Documentos</h3>
                    </div>
                    <div className="pdf-section">
                        <div className="pdf-grid">
                            {dataExample.map((pdf) => (
                                <div key={pdf.id} className="pdf-item">
                                    <Image
                                        width= {70}
                                        height= {70}
                                        priority={false}
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
