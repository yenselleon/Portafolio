import React from 'react'
import { DiBootstrap, DiCss3, DiGit, DiHtml5, DiJavascript1, DiMaterializecss, DiMongodb, DiNodejs, DiReact, DiSass } from "react-icons/di";


const Experiencie = () => {
    return (
        <section className="experience py-5" id="experience">
            <div className="container">
                    
            <div className="row">
                <div className="col-lg-11 text-center mx-auto col-12">

                    <div className="col-lg-8 mx-auto">
                    <h3>Experiencia con</h3>
                    </div>

                </div>
            </div>

            <div className="row mt-3">
                <div className="col-xs-5 col-sm-6  col-md-4 col-lg-2 text-center iconExperience">
                    <DiGit/>

                </div>
                <div className="col-xs-5 col-sm-6 col-md-4 col-lg-2 text-center iconExperience">
                    <DiJavascript1 />

                </div>
                <div className="col-xs-5 col-sm-6  col-md-4 col-lg-2 text-center iconExperience">
                    <DiHtml5 />
                
                </div>
                <div className="col-xs-5 col-sm-6 col-md-4 col-lg-2 text-center iconExperience">
                    <DiCss3/>
                
                </div>
                <div className="col-xs-5 col-sm-6 col-md-4 col-lg-2 text-center iconExperience">
                    <DiBootstrap/>
                
                </div>
                

                
                <div className="col-xs-5 col-sm-6 col-md-4 col-lg-2 text-center iconExperience">
                    <DiSass/>
                
                </div>
                <div className="col-xs-5 col-sm-6 col-md-4 col-lg-2 text-center iconExperience">
                    <DiNodejs/>
                
                </div>
                <div className="col-xs-5 col-sm-6 col-md-4 col-lg-2 text-center iconExperience">
                    <DiReact/>
                
                </div>
                <div className="col-xs-5 col-sm-6 col-md-4 col-lg-2 text-center iconExperience">
                    <DiMaterializecss/>
                
                </div>
                <div className="col-xs-5 col-sm-6 col-md-4 col-lg-2 text-center iconExperience">
                    <DiMongodb/>
                
                </div>

            </div>

            
            
            </div>
        </section>
    )
}

export default Experiencie
