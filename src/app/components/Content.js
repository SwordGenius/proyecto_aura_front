"use client"
import React from "react";
import "../../styles/StylesContent.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRouter} from "next/navigation";
import Image from 'next/image'


const Content = () => {
    const navigate=useRouter()
    function signUp() {
        navigate.push("/signUpLink")

    }

    function login() {
        navigate.push("/loginLink")
    }


    return (
        <div className="initial-content">

            <div className="information-container">

                <Image className="imgLogo"
                    src={"/assets/Aura-logo2.png"}
                    alt="AURA-logo.png"
                    width={800}
                    height={500}
                />

                <h1>Mantén tu información a la mano</h1>
                <h5>Gestiona a tus clientes donde sea que estés</h5>
                <button onClick={signUp} className="stylesBtn">Registrate</button>
            </div>

            <div className="container-photo">

                 <button className="stylesBtn"  onClick={login} >Login</button>

                <Image
                    src={"/assets/img-presentacion.jpg"}
                    alt="Landscape picture"
                    width={800}
                    height={500}
                />

            </div>

        </div>
    );
};

export default Content;




