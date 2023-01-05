import { Container } from "../Container/Container";
import labelStyle from "../SkillPart/SkillPart.module.css";



export const Contact = () => {


    return (
        <Container id="contact">
            <div className={labelStyle.label}>CONTACT</div>
            <iframe title="contact form" src="https://docs.google.com/forms/d/e/1FAIpQLSfzrWpRc0GHl5n-NGt1jJj652s4vC7NK9rBfxIQWnWr6819PA/viewform?embedded=true" width="100%" height="900" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </Container>
    );
}   