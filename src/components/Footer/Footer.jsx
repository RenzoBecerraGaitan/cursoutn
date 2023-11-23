import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <>
            <footer className="footer-section">
                <div className="footer-top text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="widget company-intro-widget text-center">
                                    <div className="text-center"><img src="./src/assets/prosap.jpg" alt="logo" className="logo-footer logo"/></div>
                                    <p>Somos una empresa de tecnología líder en comercio electrónico y soluciones fintech de América Latina. Nuestro propósito es democratizar el comercio y los servicios financieros para transformar la vida de millones de personas en la región.</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="widget course-links-widget">
                                    <h5 className="widget-title">Páginas amigas:</h5>
                                    <ul className="courses-link-list box">
                                        <li><a href="https://www.mercadolibre.com.ar"><img src="./src/assets/mercadolibre.png" className="aImage"/></a></li>
                                        <li><a href="https://es.aliexpress.com/"><img src="./src/assets/aliexpress.png" className="aImage"/></a></li>
                                        <li><a href="https://spanish.alibaba.com/g/argentina.html"><img src="./src/assets/alibaba.png" className="aImage"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center mt-3">
                                <span className="copy-right-text">© 2023 SiG Software. Todos los derechos Reservados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

