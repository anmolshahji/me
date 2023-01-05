import styles from "./CertificatePart.module.css";
import labelStyle from "../SkillPart/SkillItem.module.css";

export const Certificate = props => {
    return (
        <div key={props.img} className={`col-10 col-md-3 ${styles.certificate}`}>
            <img src={props.img} alt={props.title} />
            <p className={labelStyle.label}>{props.title}</p>
        </div>
    );
}