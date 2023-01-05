import { WiDirectionUp } from "react-icons/wi";
import styles from "./ToTop.module.css";

export const ToTop = () => {
    return (
        <div className={styles.up}>
            <a href="#home">
                <WiDirectionUp />
            </a>
        </div>
    );
}