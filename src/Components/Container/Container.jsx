import styles from "./Container.module.css";

export const Container = props => {
    return (
        <div id={props.id} style={{ backgroundColor: props.color == null ? "transparent" : props.color }} >
            <div className="container" style={{ backgroundColor: "transparent" }}>
                {props.children}
            </div>
        </div >
    );
}