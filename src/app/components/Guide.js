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
                <h1>hola 1</h1>
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
