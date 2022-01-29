import React from 'react';
import proyects from '../helpers/proyects';
import ProjectView from './ProjectView';

const Projects = () => {



    return (
        <section className="project py-5" id="project">
            <div className="container">
                    
                <div className="row">
                    <div className="col-lg-11 text-center mx-auto col-12">

                        <div className="col-lg-8 mx-auto">
                        <h3>Proyectos</h3>
                        </div>

                    </div>
                </div>

                <div className="row" id='galeria'>
                    {
                        proyects.proyects.map((data, index)=> (
                            
                            <ProjectView key={data.id} data={data} />
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default Projects
