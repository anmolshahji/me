import styles from "./Button.module.css";

export const Button = props => {
    return (
        <button className={styles.button} onClick={(e) => {
            e.preventDefault();
            props.onClick();
        }} >{props.children}</button>
    );
}