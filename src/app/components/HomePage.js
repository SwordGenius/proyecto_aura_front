"use client"
import React, { createContext, useContext,useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../../styles/StylesHomePage.css";
import Cliente from "./Cliente";
import Citas from "./Citas";
import AddQuery from "./AddQuery";
import Calendario from "./Calendario";
import Configuraciones from "./Configuraciones";
import Guide from "./Guide";
import Swal from 'sweetalert2';
import Image from 'next/image'



const Content = () => {
    const navigate = useRouter();
    const [content, setContent] = useState(null);

    useEffect(() => {
        handleContentChange("pacientes"); //este es el componente que se mostratra primero
    }, []);

    function handleContentChange(contentType) {
        switch (contentType) {
            case "pacientes":
                setContent(<Cliente />);
                break;

            case "citas":
                setContent(<Citas />);
                break;

            case "expedientes":
                break;

            case "addCitas":
                setContent(<AddQuery />);
                break;

            case "calendario":
                setContent(<Calendario />);
                break;

            case "configuracion":
                setContent(<Configuraciones />);
                break;

            case "guiaUsuario":
                setContent(<Guide />);

                break;

            default:
                setContent(null);
                break;
        }
    }

    function settingAction() {
        alert("configuracion");
    }

    function redireccionGuia() {
    }

    function cerrarSesion() {
        Swal.fire({
            title: '¿Estás seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar sesion',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Adios :)', '', 'success');

                setTimeout(() => {

                    navigate.push('/contentLink');
                }, 2000);
            }
        });    }

    return (
        <div className="container-home">
            <section className="section-left">
                <Image
                    className="imgLogo"
                    src="/assets/Aura-logo2.png"
                    alt="AURA-logo.png"
                    width={800}
                    height={500}
                />
                <div className="container">
                    <form className="botonesPrincipales">
                        <label>
                            <input type="radio" name="radio" defaultChecked />
                            <span onClick={() => { handleContentChange("pacientes"); }}>
                                Clientes
                            </span>
                        </label>
                        <label>
                            <input type="radio" name="radio" />
                            <span onClick={() => { handleContentChange("citas"); }}>
                                Citas
                            </span>
                        </label>

                        <label>
                            <input type="radio" name="radio" />
                            <span onClick={() => { handleContentChange("calendario"); }}>
                                Calendario
                            </span>
                        </label>

                        <label>
                            <input type="radio" name="radio" />
                            <span onClick={() => { handleContentChange("addCitas"); }}>
                                Agregar cita
                            </span>
                        </label>



                        <label>
                            <input type="radio" name="radio" />
                            <span  onClick={() => { handleContentChange("guiaUsuario"); }}>
                                Guia de Usuario
                            </span>
                        </label>

                        <label className="inferior">
                            <input type="radio" name="radio" />
                            <span onClick={() => { handleContentChange("configuracion"); }}>
                                Configuracion
                            </span>
                        </label>

                        <label className="inferior">
                            <input type="radio" name="radio" />
                            <span onClick={cerrarSesion}>
                                Cerrar Sesion
                            </span>
                        </label>
                    </form>
                </div>
            </section>

            <div className="separator"></div>

            <section className="section-right">
                {content}
            </section>
        </div>
    );
};

export default Content;
