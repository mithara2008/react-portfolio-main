import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const categorizedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skils</h2>
      <div className={styles.content}>
        {Object.entries(categorizedSkills).map(([category, items], index) => (
          <div key={index} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <div className={styles.skills}>
              {items.map((skill, id) => (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
