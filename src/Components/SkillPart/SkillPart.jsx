import { Container } from "../Container/Container";
import SkillItem from "./SkillItem";
import styles from "./SkillPart.module.css";

export const SkillPart = () => {
    return (
        <Container id="technology" color="pink">
            <div className={styles.label}>TECHNOLOGIES</div>
            <div className="row p-2 d-flex align-self-center justify-content-center">
                <SkillItem name="spring" />
                <SkillItem name="hibernate" />
                <SkillItem name="mysql" />
                <SkillItem name="java" />
                <SkillItem name="html" />
                <SkillItem name="css" />
                <SkillItem name="maven" />
                <SkillItem name="boot" />
                <SkillItem name="react" />
                <SkillItem name="js" />
                <SkillItem name="flutter" />
            </div>
        </Container>
    );
}
