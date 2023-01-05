import { Certificate } from "./Certificate";
import labelStyle from "../SkillPart/SkillPart.module.css"

import pic1 from "./photos/1.jpg";
import pic2 from "./photos/2.jpg";
import pic3 from "./photos/3.jpg";
import pic4 from "./photos/4.jpg";
import pic5 from "./photos/5.jpg";
import pic6 from "./photos/6.jpg";
import pic7 from "./photos/7.jpg";
import pic8 from "./photos/8.jpg";
import pic9 from "./photos/9.jpg";
import pic10 from "./photos/10.jpg";
import pic11 from "./photos/11.jpg";
import pic12 from "./photos/12.jpg";
import { Container } from "../Container/Container";

export const CertificatePart = () => {
    let list = [
        { img: pic2, title: "Oracle Certified Associate Java SE 8" },
        { img: pic3, title: "Udemy - JavaScript" },
        { img: pic4, title: "Coursera - ES6 Basics" },
        { img: pic5, title: "Coursera - RESTFUL API & HTTP" },
        { img: pic6, title: "Coursera - ReactJS" },
        { img: pic7, title: "Google - Digital Marketing" },
        { img: pic8, title: "Coursera - Bootstrap 4" },
        { img: pic9, title: "Udemy - Git & Github" },
        { img: pic10, title: "Coursera - Data Science" },
        { img: pic11, title: "Internship as Flutter Developer" },
        { img: pic12, title: "Coursera - NodeJS" },
        { img: pic1, title: "Internship as Flutter Developer" },
    ];
    const certificates = list.map(e => <Certificate key={e.img} img={e.img} title={e.title} />);
    return (
        <Container id="certificates" color="bisque">
            <div className={labelStyle.label}>CERTIFICATIONS</div>
            <div className="row d-flex align-items-center justify-content-center">
                {certificates}
            </div>
        </Container>
    );
}