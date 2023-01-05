import { Container } from "../Container/Container";
import styles from "./Timeline.module.css";

import labelStyle from "../SkillPart/SkillPart.module.css";

const timelineData = [
    {
        text: 'Cleared OCA Java SE 8 Certification with 84.3%',
        date: 'November 30 2022',
        category: {
            tag: 'CERTIFICATION',
            color: '#FFDB14'
        },

    },
    {
        text: 'Started working with Virtusa as Associate-Engineer Technology',
        date: 'June 23 2022',
        category: {
            tag: 'JOB',
            color: '#e17b77'
        },

    },
    {
        text: 'Graduated in B.E. CSE From RTMNU University, Engg. Agrregate 84.39%',
        date: 'June 2022',
        category: {
            tag: 'Engineering',
            color: '#1DA1F2'
        },

    },
    {
        text:
            'Passed 12th grade in Science(PCMB) with 77.69',
        date: 'March 2018',
        category: {
            tag: 'HSC',
            color: '#018f69'
        },

    },
    {
        text: 'Passes 10th grade with 90.80%',
        date: 'April 2016',
        category: {
            tag: 'SSC',
            color: '#018f69'
        },

    }
]

export const Timeline = () =>
    timelineData.length > 0 && (
        <Container id="timeline" color="navajowhite">
            <div className={labelStyle.label}>TIMELINE</div>
            <div className={styles['timeline-container']}>
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </Container>
    );


const TimelineItem = ({ data }) => (
    <div className={styles['timeline-item']} >
        <div className={styles['timeline-item-content']}>
            <span className={styles.tag} style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>

            <span className={styles.circle} />
        </div>
    </div >
);
