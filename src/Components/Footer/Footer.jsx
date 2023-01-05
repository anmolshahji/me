import styles from "./Footer.module.css";


export const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <div className={styles.footer}>
            <p>Created By Anmol Shah</p>
            ©{year}
        </div>
    );
}