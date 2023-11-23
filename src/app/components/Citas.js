import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import "../../styles/StylesCitas.css"
import axios from "axios";

const Citas = () => {
    const navigate = useRouter();
    const [notaDelUsuario, setNotaDelUsuario] = useState('');
    const miNombre = "Jhair Alejandro Cruz Palacios";
    const nombrePaciente = "Manuel";
    const motivo = "Endodoncia";
    const fecha = "10/10/10";
    const edad = "20";
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const cardsPerPage = 9;
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [citas, setCitas] = useState([])

    const cargarCitar =  async () => {
        try {
            axios.get(`http://localhost:3300/citas?page=${page}&&limit=12`).then((response) => {
                console.log(response);
                let citaIndexada = response.data.data;
                for (let cita in citaIndexada){
                    axios.get(`http://localhost:3300/clientes/${citaIndexada[cita].id_cliente}`).then((response) => {
                        console.log(response);
                        citaIndexada[cita].cliente = response.data.cliente;
                        console.log(citaIndexada[cita])
                        console.log(citaIndexada[cita].cliente)
                        console.log(citaIndexada[cita].cliente.nombre)
                    }).catch((error) => {
                        console.log(error);
                    });
                }
                setCitas(citaIndexada);

                let pages = response.data.totalPages;
                setMaxPage(pages);
            }).catch((error) => {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        cargarCitar().then(r => console.log(citas));
    }, []);
    function nextPage() {
        setCurrentCardIndex(currentCardIndex + cardsPerPage);
    }

    function prevPage() {
        setCurrentCardIndex(currentCardIndex - cardsPerPage);
    }

    const cardData = [{
        id: 1,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
        
    },{
        id: 2,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        id: 3,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        id: 4,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        id:5,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        id: 6,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        id: 7,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        id: 8,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        id: 9,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    },{
        id: 10,
        name: nombrePaciente,
        motivo: motivo,
        fecha: fecha,
        edad: edad
    }
    ]


    return (
        <div className="citas-contenedor">

            <div className="seccion-usuario1">
                <h2>Citas disponibles </h2>
                <h2>Hola, {miNombre}</h2>
            </div>

            <div className="contenedor-tarjetas">

                {citas?.length > 0 && citas
                    .slice(currentCardIndex, currentCardIndex + cardsPerPage)

                    .map((data, index) => (
                        <div className="tarjeta-notificacion" key={index}>
                            <div className="brillo-tarjeta"></div>
                            <div className="bordo-brillo-tarjeta"></div>
                            <div className="titulo-notificacion">Motivo: {citas[index].motivo}</div>
                            <div className="cuerpo-notificacion">Fecha: {data.fecha_cita}</div>
                            <div className="titulo-notificacion">Nombre: {citas[index].cliente?.nombre}</div>
                            <div className="cuerpo-notificacion">Edad: {citas[index].cliente?.edad}</div>

                        </div>
                    ))}

            </div>

            <div className="pagination-button">
                {currentCardIndex > 0 && (
                    <button className="btns-sig-atr" onClick={prevPage}>Atrás</button>
                )}
                {currentCardIndex + cardsPerPage < cardData.length && (
                    <button className="btns-sig-atr"  onClick={nextPage}>Siguiente</button>
                )}
            </div>


        </div>

    );
};
export default Citas;
