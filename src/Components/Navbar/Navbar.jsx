import anmol from "../TopPart/anmol_shah.png";
import styles from "./Navbar.module.css";

import resume from "../Resume/resume.pdf";

export const Navbar = () => {
    return (
        <div className="sticky-top bg-light">
            <div className={`mx-5 ${styles.navbar}  `}>
                < ul className="nav justify-content-end" >
                    <li className="mr-auto ml-2">
                        <a className="navbar-brand" href="#home">
                            <img src={anmol} width="40" height="40" alt="anmol shah" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#certificates">CERTIFICATIONS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#technology">TECHNOLOGIES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#timeline">TIMELINE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">CONTACT</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${styles['focus-link']} `} rel="noreferrer" target="_blank" href={resume}>RESUME</a>
                    </li>
                </ul >
            </div >
        </div>
    );
}