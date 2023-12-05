"use client"
import React, { useState, useEffect } from "react";
import "../../styles/StylesDocumentos.css";

import Link from "next/link";
import Swal from "sweetalert2";
import axios from "axios";
import {useSearchParams} from "next/navigation";
// import PdfThumbnail from 'react-pdf-thumbnail';

const Documentos = () => {
    const [isLoading, setisLoading] = useState(true);
    const [isInformation, setisInformation] = useState(false);
    const [response, setResponse] = useState(false);
    const [data, setData] = useState([{id: 0, documento_pdf: "", tipo_documento: ""}]);
    const [images, setImages] = useState([]);
    const search = useSearchParams()

    const cargarDocumentos = async () => {
        try {
            const id = search.get("id");
            const response = await axios.get("http://50.16.134.143:3300/documentos?id="+id, {
                withCredentials: true,
            })

            let documentos = response.data.data;
            setData(documentos);
            // let imagenes = [];
            // documentos.map(async (documento) => {
            //     const {error, imageUrl} = await PdfThumbnail(documento.documento_pdf,
            //         {
            //             fileName: documento.tipo_documento,
            //             pageNo: 1,
            //             width: 70,
            //             height: 70,
            //         }
            //     );
            //     if (!error) {
            //         imagenes.push(imageUrl);
            //     }
            // });
            // setImages(imagenes);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        cargarDocumentos()
        setTimeout(() => {
            setisLoading(false);
        }, 1000);
        if (response) {
            setisInformation(true);
        }
    }, [data]);

    const dataExample = [
        {
            id: 1,
            info: "Juan",
            img: 25,
        },
        {
            id: 2,
            info: "Juan",
            img: 25,
        },
        {
            id: 3,
            info: "Juan",
            img: 25,
        },
        {
            id: 4,
            info: "Juan",
            img: 25,
        },
        {
            id: 5,
            info: "Juan",
            img: 25,
        },
        {
            id: 6,
            info: "Juan",
            img: 25,
        },
        {
            id: 7,
            info: "Juan",
            img: 25,
        },
        {
            id: 8,
            info: "Juan",
            img: 25,
        },
    ];

    const subirpdf = () => {
        Swal.fire({
            title: "Subir Documento",
            html:
                '<input type="file" id="fileInput" accept=".pdf" style="margin-bottom: 10px" />' +
                '<input type="text" id="descripcionInput" placeholder="Ingrese una descripción" style="margin-bottom: 10px" />',
            showCancelButton: true,
            confirmButtonText: "Subir",
            cancelButtonText: "Cancelar",
            showLoaderOnConfirm: true,
            preConfirm: () => {
                const fileInput = document.getElementById("fileInput");
                const descripcionInput = document.getElementById("descripcionInput");
                const file = fileInput.files[0];
                const descripcion = descripcionInput.value;
                return new Promise((resolve) => {
                    setTimeout(() => {
                        if (file && descripcion) {
                            resolve({ file, descripcion });
                        } else {
                            Swal.showValidationMessage("Debes seleccionar un documento y proporcionar una descripción");
                        }
                    }, 1000);
                });
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
            if (result.isConfirmed) {
                const { file, descripcion } = result.value;
                try {
                    const formData = new FormData();
                    formData.append("documento_pdf", file);
                    formData.append("tipo_documento", descripcion);
                    formData.append("id_cliente", search.get("id"));

                    axios.post("http://localhost:3300/documentos", formData, {
                        withCredentials: true,
                    }).then(r => {
                        console.log(r)
                    });
                } catch (error) {
                    Swal.fire("Error", "No se pudo subir el documento", "error");
                }
                Swal.fire(`Documento subido con éxito\nDescripción: ${descripcion}`, "", "success");
            }
        });
    };
    
    if (isLoading) {
        return (
            <>
                <div className="container-documentos">
                    <Link href="/contenidoClienteLink" className="custom-button">
                        Regresar
                    </Link>
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
        );
    }

    if (isInformation) {
        return (
            <>
                <div className="container-home">
                    <Link href="/contenidoClienteLink" className="custom-button">
                        Regresar
                    </Link>
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
        );
    }

    return (
        <>
            <div className="container-home">
                <Link href="/contenidoClienteLink" className="custom-button">
                    Regresar
                </Link>
                <div className="column-center">
                    <div>
                        <h3>Documentos</h3>
                    </div>
                    <div className="pdf-section">
                        <button onClick={subirpdf} className="btn-subir">
                            Subir Documento
                        </button>
                        <div className="pdf-grid">
                            {data.map((pdf, index) => (
                                <Link href={pdf.documento_pdf} key={index}>
                                    <div key={index} className="pdf-item">
                                        <img className="img-pdf" src="/pdf.png" alt="pdf-image"/>
                                        <p>{pdf.tipo_documento}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Documentos;
