import styles from "./RightPart.module.css";
import { SocialIcons } from "./SocialIcons";

export const RightPart = props => {
    return (
        <div className="col-md-6" style={{ height: "80vh" }} >
            <div className="d-flex h-100 ml-1 flex-column align-items-start  justify-content-center">
                <div className={styles.greeting}>
                    Hello, I'm
                </div>
                <div className={styles.name}>
                    Anmol Shah
                </div>
                <div className={styles.job}>
                    Software Engineer
                </div>
                <div className={styles.intro}>
                    <p>Budding Engineer gaining expertise in Information Technology, with a demonstrated history of working as Software Engineer in the software industry. </p>
                </div>
                <SocialIcons />
                {/* <Button value="About Me" onClick={() => { }} /> */}
            </div>
        </div>
    );
}