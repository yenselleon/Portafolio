import React from 'react'

const About = () => {
    return (
        <>
            <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                            <div className="about-text">
                                <small className="small-text">Bienvenido a <span className="mobile-block">mi Portafolio!</span></small>
                                <h1 className="animated animated-text">
                                    <span className="mr-2">Hi, I'm</span>
                                        <div className="animated-info">
                                            <span className="animated-item">Yensel Leon</span>
                                            <span className="animated-item">Frontend Dev</span>
                                        </div>
                                </h1>

                                <p>Adquiriendo conocimiento de manera autodidacta y construyendo proyectos personales desde hace mas de un año. Disfruto hacer las interfaces de aplicaciones web y tomar retos que puedan aumentar mis capacidades y desarrollar mis habilidades. Actualmente en busca de mi crecimiento profesional</p>
                                
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="about-image svg">
                                <img src="images/undraw/undraw_programming_re_kg9v.svg" className="img-fluid" alt="logo about" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About
