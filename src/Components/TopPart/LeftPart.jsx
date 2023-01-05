import img from "./anmol_shah.png";
import styles from "./LeftPart.module.css";


export const LeftPart = props => {
    return (
        <div className="col-md-6">
            <div className="d-flex flex-column h-100 align-items-center justify-content-center" >
                <img className={styles.image} src={img} alt="anmol_shah" about="anmol_shah" />
            </div>

        </div>
    );
}