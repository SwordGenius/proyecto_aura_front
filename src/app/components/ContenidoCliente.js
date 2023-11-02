"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/StylesContenidoCliente.css";

const ContenidoCliente = () => {
    const navigate = useRouter();
    const [notes, setNotes] = useState('');

    // Función para actualizar el estado "notes"
    const functionNotes = (e) => {
        setNotes(e.target.value);
    };

    return (
        <div className="container-cliente">

            <div className="card-information">
                <div className="cardCliente">
                    <div className="card__img">
                        <img src={"/assets/client.svg"} alt="cliente.png" />
                    </div>
                    <div className="card__descr-wrapper">
                        <p className="card__title">Project</p>
                        <p className="card__descr">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis nemo fugit autem possimus, magnam consequatur sint esse.
                        </p>
                        <div className="card__links">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg">
                                    <path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l-1.6-1.1..."></path>
                                </svg>
                                <a className="link" href="#">Preview</a>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg">
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0 2 2.3-3.6 5.2-3.6 3-0.3 5.6 1.3 5.6 3.6..."></path>
                                </svg>
                                <a className="link" href="#">Code</a>
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
                        <button>Guardar nota</button>
                    </form>
                </div>

                <div className="folders">
                    <div className="cardDocumentos">
                        <div className="card-details">
                            <p className="text-title">Documentos</p>
                            <p className="text-body">Aqui puedes ver todos los documentos de tu cliente</p>
                        </div>
                        <button class="card-button">More info</button>
                    </div>

                    <div className="cardDocumentos">
                        <div className="card-details">
                            <p className="text-title">Historial</p>
                            <p className="text-body">Aqui puedes ver el historial de trabajo con tu cliente</p>
                        </div>
                        <button className="card-button">More info</button>
                    </div> </div>
            </div>
        </div>
    );
};

export default ContenidoCliente;
