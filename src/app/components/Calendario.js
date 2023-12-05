"use client"
import React from "react";
import "../../styles/StylesCelendario.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


const Calendario = () => {

        return (
        <div className="calendario-container">
            <FullCalendar
                plugins={[ dayGridPlugin ]}

                initialView="dayGridMonth"
            />

        </div>
    )

}

export default Calendario;

