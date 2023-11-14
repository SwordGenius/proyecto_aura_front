"use client"
import React from 'react'
import "../../styles/StylesHomePage.css";

export default function Sidebar(props) {


    return (
        <>
            <section className="section-left">
                <img className="imgLogo" src={"/assets/Aura-logo2.png"} alt="AURA-logo.png" />
                <div className="container">
                    <div className="botonesPrincipales">
                        <label>
                            <input type="radio" name="radio" checked />
                            <span>
                                {props.name}
                            </span>
                        </label>
                    </div>
                </div>
            </section>
            <div className="separator"></div>
        </>
    )
}
