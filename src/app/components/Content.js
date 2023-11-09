"use client"
import React from "react";
import "../../styles/StylesContent.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRouter} from "next/navigation";

const Content = () => {
    const navigate=useRouter()
    function signUp() {
        navigate.push("/signUpLink")

    }

    function login() {
        navigate.push("/homePageLink")
    }


    return (
        <div className="initial-content">

            <div className="information-container">
                <img className="imgLogo" src={"/assets/Aura-logo2.png"} alt="AURA-logo.png" />
                <h1>Mantén tu información a la mano</h1>
                <h5>Gestiona a tus clientes donde sea que estés</h5>
                <button onClick={signUp} className="stylesBtn">Registrate</button>
            </div>

            <div className="container-photo">

                 <button className="stylesBtn"  onClick={login} >Login</button>
                <img className="imgMujer" src={"/assets/img-presentacion.jpg"} alt="img-presentacion.jpg" />
            </div>

        </div>
    );
};

export default Content;




