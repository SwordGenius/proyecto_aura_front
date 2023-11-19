"use client";
import "../../styles/StylesGuide.css";
// Añade estos import al inicio de tu archivo
import React, { useRef, useState, useEffect } from "react";

const Guide = () => {
    const sectionRefs = [useRef(), useRef(), useRef()];
    const [currentSection, setCurrentSection] = useState(0);

    // Detecta la sección actual al hacer scroll
    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        const newCurrentSection = sectionRefs.findIndex(
            (ref) => ref.current.offsetTop <= scrollPosition && ref.current.offsetTop + ref.current.offsetHeight > scrollPosition
        );

        if (newCurrentSection !== -1 && newCurrentSection !== currentSection) {
            setCurrentSection(newCurrentSection);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    const scrollToSection = (index) => {
        sectionRefs[index].current.scrollIntoView({
            behavior: "smooth",
        });
        setCurrentSection(index);
    };

    return (
        <div className="guide-container">

            <div className="guide-section" ref={sectionRefs[0]}>
                <div className="container-guide0">
                    <div className="textWelcolme">
                        <h1 className="titleWelcome">Bienvenido a la Guía de Usuario</h1>
                        <p>
                            ¡Hola! Bienvenido a nuestra guía de usuario. Estamos encantados de tenerte aquí.
                            Esta página está diseñada para proporcionarte información detallada y tutoriales
                            en video que te ayudarán a aprovechar al máximo nuestro software.
                        </p>
                        <p>
                            Explora las secciones a continuación para encontrar respuestas a tus preguntas y
                            descubrir consejos útiles. Siempre estamos trabajando para mejorar tu experiencia,
                            así que revisa regularmente para obtener actualizaciones y nuevos tutoriales.
                        </p>
                    </div>

                    <div className="imgWelcome">
                        <img className="imageWelcome" src={"/assets/img-login.jpg"} alt="img-login-central.jpg" />

                    </div>
                </div>
            </div>

            <div className="guide-section" ref={sectionRefs[1]}>
                <h1>hola 2</h1>
            </div>

            <div className="guide-section" ref={sectionRefs[2]}>
                <h1>hola 3</h1>
            </div>
            <div className="navigation-buttons">
                {sectionRefs.map((ref, index) => (
                    <button
                        key={index}
                        className={currentSection === index ? "active" : ""}
                        onClick={() => scrollToSection(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Guide;
