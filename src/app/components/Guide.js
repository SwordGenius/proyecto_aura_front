"use client"
import "../../styles/StylesGuide.css";
import "../../styles/StylesLoad.css";

import { saveAs } from 'file-saver';

const Guide = () => {


    async function downloadGuide() {
        try {
            const pdfPath = "/assets/pdf/guiaUser.pdf";

            const response = await fetch(pdfPath);
            const blob = await response.blob();

            saveAs(blob, "Guia de usuario Aura.pdf");

            alert("Descarga completada");
        } catch (error) {
            console.error("Error al descargar el PDF:", error);
            alert("Hubo un error al descargar el PDF");
        }
    }

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


            <div className="container-guide0">

                <div className="imgWelcome">
                    <img className="imageWelcome" src={"/assets/4.jpg"} alt="img de ayuda" />
                </div>

                <div className="textWelcolme">
                    <p>
                        "Si no has encontrado la información que necesitas, te invitamos a descargar nuestro  manual de usuario. En él, encontrarás detalles detallados y respuestas a las preguntas más frecuentes. ¡Esperamos que te sea de ayuda
                    </p>

                    <button onClick={downloadGuide} className="buttondes" type="button">
                        <span class="button__text">Descargar</span>
                        <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                                        id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2"
                                                        className="svg"><path
                            d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path
                            d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path
                            d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                    </button>
                </div>


            </div>


            </div>


    );
};

export default Guide;










