import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
      <div className="container-fluid footer__wrapper contact" id="contact">
          <div className="container d-flex flex-column text-center py-3 justify-content-center wrapper__footer">
              <h5>By Yensel Leon</h5>
              
              <p>Email: yensel41@gmail.com</p>

              <div className=" d-flex justify-content-center wrapper__footer__icon__container">
                <a href="https://github.com/yenselleon" target="_blank" rel="noopener noreferrer">
                    <div className="rounded-circle bg-light icon__footer__wrapper mx-2 d-flex justify-content-center align-items-center">
                        <DiGithubBadge />
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/yensel-leon-solorzano-723ab5116/" target="_blank" rel="noopener noreferrer">
                    <div className="rounded-circle bg-light icon__footer__wrapper mx-2 d-flex justify-content-center align-items-center">
                        <AiFillLinkedin />
                    </div>
                </a>

                <a href="https://twitter.com/garimpeiro_code" target="_blank" rel="noopener noreferrer">
                    <div className="rounded-circle bg-light icon__footer__wrapper mx-2 d-flex justify-content-center align-items-center">
                        <AiFillTwitterCircle/>
                    </div>
                </a>
              </div>
          </div>
      </div>
  );
};

export default Footer;
