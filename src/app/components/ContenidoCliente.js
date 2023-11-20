"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/StylesContenidoCliente.css";

import Swal from 'sweetalert2';
import Link from "next/link";

const ContenidoCliente = () => {
    const navigate = useRouter();
    const [notes, setNotes] = useState('');
    const nombreCliente = "Manuel";
    const motivo = "Mantenimiento de pc";

    const functionNotes = (e) => {

        setNotes(e.target.value);
    };

    function funtionDocument() {
        navigate.push('/documentosLink');
    }

    function funtionHistorial() {
        navigate.push('/historial')
    }

    function saveNote() {
        Swal.fire(
            'Exito',
            'Su nota se a guardado',
            'success'
        )
    }

    function funtionAtras() {
        navigate.push('/homePageLink');
    }

    function funtionModificar() {
        alert("modificar")
    }

    function funtionEliminar() {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará la cuenta del cliente. ¿Estás seguro de que deseas continuar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Cliente eliminado', '', 'success');

                setTimeout(() => {
                    navigate.push('/homePageLink');
                }, 2000);
            }
        });
    }


    return (
        <div className="container-cliente">
            <Link href="/homePageLink" className="custom-button">Regresar</Link>
            <div className="card-information">
                <div className="cardCliente">
                    <div className="card__img">
                        <img src={"/assets/client.svg"} alt="cliente.png" />
                    </div>
                    <div className="card__descr-wrapper">
                        <p className="card__title">{nombreCliente}</p>
                        <p className="card__descr">
                            {motivo}
                        </p>
                        <div className="card__links">
                            <div>
                                <a onClick={funtionModificar} className="link">Modificar</a>
                            </div>
                            <div>

                                <a onClick={funtionEliminar} className="link" >Eliminar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="content-container">
                <div className="card-text">
                    <form className="notes">
                        <div className="title">Notas de tu cliente</div>
                        <textarea
                            placeholder="Your message"
                            value={notes}
                            onChange={functionNotes}
                        ></textarea>

                        <div className="conBtn">
                            <button onClick={saveNote}>Guardar Nota</button>
                        </div>

                    </form>
                </div>

                <div className="folders">
                    <div className="cardDocumentos">
                        <div className="card-details">
                            <p className="text-title">Documentos</p>
                            <p className="text-body">Aqui puedes ver todos los documentos de tu cliente</p>
                        </div>
                        <button onClick={funtionDocument} className="card-button">Ver</button>
                    </div>

                    <div className="cardDocumentos">
                        <div className="card-details">
                            <p className="text-title">Historial</p>
                            <p className="text-body">Aqui puedes ver el historial de trabajo con tu cliente</p>
                        </div>
                        <button onClick={funtionHistorial} className="card-button">Ver</button>
                    </div>


                </div>



            </div>
        </div>
    );
};

export default ContenidoCliente;
