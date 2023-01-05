import styles from "./MobileNavbar.module.css";
import resume from "../Resume/resume.pdf";

export const MobileNavbar = () => {
    return (
        <div className={`${styles.mobileNavbar}`}>
            < ul className="nav justify-content-center" >

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
        </div>
    );
}