"use client";
import React, {useState} from 'react';
import "../../styles/StylesLoginAndSignUp.css"
import axios, {Axios} from "axios";
import swal from "sweetalert2";
import {useRouter} from "next/navigation";
import Image from 'next/image'


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useRouter();

    async function signUp(event) {
        event.preventDefault();
        try {
            await axios.post("http://50.16.134.143:3300/usuarios", {
                email: email,
                password: password,
                nombre: name
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
            await swal.fire({
                icon: "success",
                title: "Success",
                text: "Usuario registrado correctamente",

            });
            await axios.post("http://50.16.134.143:3300/auth/login", {
                email: email,
                password: password
            },{withCredentials: true}).then((response) => {
                console.log(response);
                navigate.push("/homePageLink")
            }).catch((error) => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
            await swal.fire({
                icon: "error",
                title: "Error",
                text: "Error al registrarse"
            });
        }
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
