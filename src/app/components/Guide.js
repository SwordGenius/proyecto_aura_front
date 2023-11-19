"use client"
import React, { useRef, useState, useEffect } from "react";
import "../../styles/StylesGuide.css";

const Guide = () => {


    return (
        <div className="guide-container">

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

                <div className="container-guide1">
                    <div className="textWelcolme2">
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

                        <div className="cardsVideos">

                            <div className="cardvideo">
                                <video className="card-image" controls>
                                    <source src="/assets/videos/prueba.mp4" type="video/mp4" />
                                    !UPS¡ al parecer tu navegador no soporta el  video.
                                </video>
                                <p className="card-title">titulo del tutorial</p>
                                <p className="card-body">
                                    Descripcion del tutorial
                                </p>
                                <p className="footer">Version de Aura <span className="by-name">1.0</span> de <span className="date">18/11/23</span></p>
                            </div>

                            <div className="cardvideo">
                                <video className="card-image" controls>
                                    <source src="/assets/videos/prueba.mp4" type="video/mp4" />
                                    !UPS¡ al parecer tu navegador no soporta el  video.
                                </video>
                                <p className="card-title">titulo del tutorial</p>
                                <p className="card-body">
                                    Descripcion del tutorial
                                </p>
                                <p className="footer">Version de Aura <span className="by-name">1.0</span> de <span className="date">18/11/23</span></p>
                            </div>

                            <div className="cardvideo">
                                <video className="card-image" controls>
                                    <source src="/assets/videos/prueba.mp4" type="video/mp4" />
                                    !UPS¡ al parecer tu navegador no soporta el  video.
                                </video>
                                <p className="card-title">titulo del tutorial</p>
                                <p className="card-body">
                                    Descripcion del tutorial
                                </p>
                                <p className="footer">Version de Aura <span className="by-name">1.0</span> de <span className="date">18/11/23</span></p>
                            </div>

                            <div className="cardvideo">
                                <video className="card-image" controls>
                                    <source src="/assets/videos/prueba.mp4" type="video/mp4" />
                                    !UPS¡ al parecer tu navegador no soporta el  video.
                                </video>
                                <p className="card-title">titulo del tutorial</p>
                                <p className="card-body">
                                    Descripcion del tutorial
                                </p>
                                <p className="footer">Version de Aura <span className="by-name">1.0</span> de <span className="date">18/11/23</span></p>
                            </div>


                            <div className="cardvideo">
                                <video className="card-image" controls>
                                    <source src="/assets/videos/prueba.mp4" type="video/mp4" />
                                    !UPS¡ al parecer tu navegador no soporta el  video.
                                </video>
                                <p className="card-title">titulo del tutorial</p>
                                <p className="card-body">
                                    Descripcion del tutorial
                                </p>
                                <p className="footer">Version de Aura <span className="by-name">1.0</span> de <span className="date">18/11/23</span></p>
                            </div>

                            <div className="cardvideo">
                                <video className="card-image" controls>
                                    <source src="/assets/videos/prueba.mp4" type="video/mp4" />
                                    !UPS¡ al parecer tu navegador no soporta el  video.
                                </video>
                                <p className="card-title">titulo del tutorial</p>
                                <p className="card-body">
                                    Descripcion del tutorial
                                </p>
                                <p className="footer">Version de Aura <span className="by-name">1.0</span> de <span className="date">18/11/23</span></p>
                            </div>

                        </div>
                    </div>
                </div>




            </div>


    );
};

export default Guide;
