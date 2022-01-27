import React from 'react';

const NavBar = () => {
    return (
        <nav className="shadow navbar navbar-expand-sm navbar-light navbar__wrapper">
            <div className="container navbar__container">
                <a className="navbar-brand navbar__name" href="index.html"><i className='uil uil-user'></i> Yensel Leon</a>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a href="#about" className="nav-link"><span data-hover="About">Sobre mi</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#project" className="nav-link"><span data-hover="Projects">Proyectos</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link"><span data-hover="Contact">Contacto</span></a>
                        </li>
                    </ul>

                    {/* <ul className="navbar-nav ml-lg-auto">
                        <div className="ml-lg-4">
                        <div className="color-mode d-lg-flex justify-content-center align-items-center">
                            <MdDarkMode/>
                            Dark mode
                        </div>
                        </div>
                    </ul> */}
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
