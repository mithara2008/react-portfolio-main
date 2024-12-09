import React from "react";
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

const educationData = [
  {
    title: "BSc. (Hons) in IT",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    graduation: "Expected Graduation: 2026",
    imageSrc: "education/sllit.png",
  },
  {
    title: "High School Diploma",
    institution: "Mahamaya Girls' School, Nugegoda",
    graduation: "Graduated: 2020",
    imageSrc: "education/mahamaya.jpeg",
  },
];

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.educationItems}>
          {educationData.map((item, index) => (
            <li key={index} className={styles.educationItem}>
              <img
                src={getImageUrl(item.imageSrc)}
                alt={`${item.title} Icon`}
                className={styles.icon}
              />
              <div className={styles.educationItemText}>
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
                <p>{item.graduation}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
