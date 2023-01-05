import styles from "./SocialIcons.module.css";
import { AiOutlineGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillCode } from "react-icons/ai";


export const SocialIcons = props => {
    return (
        <div className="row">
            <SocialIcon name="github" link="https://github.com/anmolshahji" />
            <SocialIcon name="linkedin" link="https://www.linkedin.com/in/anmol-shah-a55694170/" />
            <SocialIcon name="twitter" link="https://twitter.com/Anmolsh11315511" />
        </div>
    );
}

const SocialIcon = (props) => {
    let component = null;
    switch (props.name) {
        case "github":
            component = <AiOutlineGithub />
            break;
        case "linkedin":
            component = <AiFillLinkedin />
            break;
        case "twitter":
            component = <AiFillTwitterCircle />
            break;
        default:
            component = <AiFillCode />
    }

    return (
        <div className="col">
            <div className={styles.icon}>
                <a className={styles.link} href={props.link} target="_blank" rel="noopener noreferrer">{component}</a>
            </div>
        </div>
    );
}