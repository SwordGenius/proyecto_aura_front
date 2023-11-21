"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/StylesConfiguracion.css";
import Swal from 'sweetalert2';


const Contfiguracion = () => {
    const navigate = useRouter();
    const [content, setContent] = useState(null);
    const [nameUser, setNameUser] = useState("Manuel Arturo");
    const [nameProfesion, setNameProfesion] = useState("backend developer");
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(nameUser);
    const [editedProfession, setEditedProfession] = useState(nameProfesion);

    function eliminar() {
        alert("eliminar");
    }

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

    function saveChanges() {
        setNameUser(editedName);
        setNameProfesion(editedProfession);
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
                        <div className="card-subtitle">{nameProfesion}</div>
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
                            value={editedProfession}
                            onChange={(e) => setEditedProfession(e.target.value)}
                        />
                        <button onClick={saveChanges}>Guardar Cambios</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contfiguracion;
