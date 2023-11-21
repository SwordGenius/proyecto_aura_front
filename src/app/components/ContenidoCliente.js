"use client"
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import "../../styles/StylesContenidoCliente.css";
import Image from 'next/image'

import Swal from 'sweetalert2';
import axios from "axios";

const ContenidoCliente = ({id}) => {
    const navigate = useRouter();
    const [notes, setNotes] = useState('');
    const nombreCliente = "Manuel";
    const motivo = "Mantenimiento de pc";
    const [cliente, setCliente] = useState({
        nombre: "",
        edad: "",
        notas: ""
    });

    const cargarCliente = async () => {
        try {
            const response = await axios.get(`http://localhost:3300/clientes/${id}`);
            let clienteindexado = response.data.cliente;
            console.log(clienteindexado)
            clienteindexado.notas = ""
            setCliente(clienteindexado);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        cargarCliente().then(r => console.log("cliente cargado"));
    }, [])

    const functionNotes = (e) => {

        setNotes(e.target.value);
    };

    function funtionDocument() {
        navigate.push('/documentosLink');
    }

    function funtionHistorial() {
        alert("historial")
    }

    function saveNote(event) {
        event.preventDefault();
        try {
            let reemplazoNota = cliente;
            reemplazoNota.notas = notes;
            setCliente(reemplazoNota);
            console.log(reemplazoNota)
            axios.patch(`http://localhost:3300/clientes/${id}`, reemplazoNota).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
            Swal.fire(
                'Exito',
                'Su nota se a guardado',
                'success'
            )    } catch (error) {
            console.log(error);
            Swal.fire(
                'Error',
                'Su nota no se a guardado',
                'error'
            )

        }
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
                axios.delete(`http://localhost:3300/clientes/${id}`).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                });
                Swal.fire('Cliente eliminado', '', 'success');

                setTimeout(() => {
                    navigate.push('/homePageLink');
                }, 2000);
            }
        });
    }


    return (
        <div className="container-cliente">

            <button onClick={funtionAtras} className="custom-button">Regresar</button>



            <div className="card-information">
                <div className="cardCliente">
                    <div className="card__img">

                        <Image
                            src="/assets/client.svg"
                            alt=" cliente.png"
                            width={800}
                            height={500}
                        />
                    </div>
                    <div className="card__descr-wrapper">
                        <p className="card__title">{cliente.nombre}</p>
                        <p className="card__descr">
                            {cliente.edad}
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
                        <button onClick={funtionDocument} class="card-button">Ver</button>
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
