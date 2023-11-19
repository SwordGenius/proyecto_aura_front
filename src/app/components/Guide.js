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
                            <span className="spanHola">¡Hola!</span> Bienvenido a nuestra guía de usuario. Estamos encantados de tenerte aquí.
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
                        <img className="imageWelcome" src={"/assets/4155601.jpg"} alt="img de ayuda" />

                    </div>
                </div>
            </div>

            <div className="guide-section" ref={sectionRefs[1]}>
                <div className="container-guide1">
                    <h2 className="titleWelcome2">Explora nuestros Videos</h2>
                    <p>
                        Aquí encontrarás una colección de videos que hemos preparado para guiarte en el uso de nuestro software.
                        Desde funciones básicas hasta consejos avanzados, estos videos te serán útiles para aprovechar al máximo todas
                        las características que ofrecemos.
                    </p>
                    <p>
                        ¡No dudes en explorar y aprender! Si tienes alguna pregunta específica, también puedes consultar nuestra sección
                        de preguntas frecuentes o contactarnos directamente.
                    </p>
                </div>
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
