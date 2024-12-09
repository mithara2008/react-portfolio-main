import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils"; // Ensure the function handles file URLs if needed

export const Hero = () => {
  const resumeUrl = getImageUrl("resume/resume.pdf"); // Assuming the file is in a "resume" folder

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nisadi Mithara</h1>
        <p className={styles.description}>
        I’m a passionate and versatile tech enthusiast currently pursuing a BSc. (Hons) in IT. 
        Skilled in web development and UI/UX design 
        I specialize in creating user-centric solutions with technologies like MERN, Python, and Java. With a strong foundation in programming and design, 
        I strive to craft seamless digital experiences and contribute to innovative projects that make a real impact.
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:nisadimithara01@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href={resumeUrl} className={styles.resumeBtn} target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/me1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
