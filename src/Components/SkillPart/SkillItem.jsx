import styles from "./SkillItem.module.css";
import { SiSpring, SiHibernate, SiMysql, SiJava, SiHtml5, SiCss3, SiApachemaven, SiSpringboot, SiReact, SiJavascript, SiIcon, SiFlutter } from "react-icons/si";

const SkillItem = (props) => {
    let component = null;
    let label = null;
    switch (props.name) {
        case "spring":
            component = <SiSpring />
            label = "Spring Core";
            break;
        case "hibernate":
            component = <SiHibernate />
            label = "Hibernate";
            break;
        case "mysql":
            component = <SiMysql />
            label = "MySql";
            break;
        case "java":
            component = <SiJava />
            label = "Java SE 8";
            break;
        case "html":
            component = <SiHtml5 />
            label = "HTML 5";
            break;
        case "css":
            component = <SiCss3 />
            label = "CSS 3";
            break;
        case "maven":
            component = <SiApachemaven />
            label = "Maven";
            break;
        case "boot":
            component = <SiSpringboot />
            label = "Spring Boot";
            break;
        case "react":
            component = <SiReact />
            label = "React JS";
            break;

        case "js":
            component = <SiJavascript />
            label = "JavaScript ES6";
            break;
        case "flutter":
            component = <SiFlutter />
            label = "Flutter";
            break;
        default:
            component = <SiIcon />
            label = "Loading";
            break;

    }
    return (
        <div className={`col-3 col-sm-2 ${styles.wrapper}`}>
            <div className={styles.skill}>
                {component}
            </div>
            <div className={styles.label}>{label}</div>
        </div>
    );
}

export default SkillItem;