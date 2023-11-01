"use client"
import React from "react";
import "../../styles/StylesCelendario.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendario = () => {
    return (
        <div className="calendario-container">
            <Calendar className="calendario" />
        </div>
    );
};

export default Calendario;

