"use client"
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import "../../styles/StylesConfiguracion.css";
import Swal from 'sweetalert2';
import axios from "axios";



const Contfiguracion = () => {
    const navigate = useRouter();
    const [content, setContent] = useState(null);
    const [nameUser, setNameUser] = useState("Manuel Arturo");
    const [nameEmail, setNameEmail] = useState("backend developer");
    const [namePassword, setNamePassword] = useState("Worker");
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(nameUser);
    const [editedEmail, setEditedEmail] = useState(nameEmail);
    const [editedPassword, setEditedPassword] = useState(namePassword);
    const [id, setId] = useState(0);


    function funtionDeleteUser() {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará tu cuenta con toda tu información. ¿Estás seguro de que deseas continuar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    axios.delete(`http://localhost:3300/usuarios/${id}`).then((response) => {
                        console.log(response);
                    }).catch((error) => {
                        console.log(error);
                    });
                } catch (error) {
                    console.log(error);
                }
                Swal.fire('Gracias por probar nuestro software', '', 'success');

                setTimeout(() => {
                    navigate.push('/contentLink');
                }, 2000);
            }
        });
    }



    function funtionModificar() {
        setIsEditing(true);
    }

    const setIdUser =  async () => {
        try {
            await axios.get('http://localhost:3300/usuarios/cookie', {withCredentials: true}).then((response) => {
                console.log(response);
                let IdResponse = response.data.id;
                setId(IdResponse);
            }).catch((error) => {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setIdUser().then(r => console.log("Id cargado"));
    }, []);

    function saveChanges() {
        setNameUser(editedName);
        setNameEmail(editedEmail);
        setNamePassword(editedPassword);
        try {
            axios.patch(`http://localhost:3300/usuarios/${id}`, {
                nombre: editedName,
                correo: editedEmail,
                password: editedPassword
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
            } catch (error) {
                console.log(error);
        }
        setIsEditing(false);
    }

    return (
        <div className="container-Configuracion">
            <h1 className="titulo">configuracion del perfil</h1>

            <div className="centered-card">

                <div className="carduser">
                    <div className="card-info">
                        <div className="card-avatar"></div>
                        <div className="card-title">{nameUser}</div>
                        <div className="card-subtitle">{nameEmail}</div>
                        <div className="card-subtitle">{namePassword}</div>
                    </div>
                </div>

                <div className="card-btns">
                    <button onClick={funtionDeleteUser} className="btnOption">Eliminar Cuenta</button>
                    <button onClick={funtionModificar} className="btnOption">Modificar Cuenta</button>
                </div>
                {isEditing && (
                    <div className="edit-popup">
                        <input
                            type="text"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                        />
                        <input
                            type="text"
                            value={editedEmail}
                            onChange={(e) => setEditedEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            value={editedPassword}
                            onChange={(e) => setEditedPassword(e.target.value)}
                        />
                        <button onClick={saveChanges}>Guardar Cambios</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contfiguracion;
