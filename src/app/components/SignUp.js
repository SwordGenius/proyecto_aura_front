"use client";
import React, {useState} from 'react';
import "../../styles/StylesLoginAndSignUp.css"
import Image from 'next/image'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    function signUp() {
        alert("email"+ email)
        alert("pass"+ password)
        alert("name"+ name)
    }

    return (
        <div className="container-login">

            <form className="form">

                <div className="contenedor-img">
                    <Image
                        className="imgLogin"
                        src="/assets/img-signUp.jpg"
                        alt="img-login-central.jpg"
                        width={800}
                        height={500}
                    />
                </div>

                <div className="flex-column">
                    <label>Name</label>
                </div>
                <div className="inputForm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20">
                    </svg>
                    <input
                        placeholder="Enter your Name"
                        className="input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} // Actualiza el estado del email al cambiar el valor del campo
                    />
                </div>

                <div className="flex-column">
                    <label>Email</label>
                </div>
                <div className="inputForm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20">
                    </svg>
                    <input
                        placeholder="Enter your Email"
                        className="input"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email al cambiar el valor del campo
                    />
                </div>

                <div className="flex-column">
                    <label>Password</label>
                </div>
                <div className="inputForm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
                    </svg>
                    <input
                        placeholder="Enter your Password"
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña al cambiar el valor del campo
                    />
                </div>


                <button className="button-submit" onClick={signUp}>Sign Up </button>


            </form>
        </div>
    );
}

export default Login;
