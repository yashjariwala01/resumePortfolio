import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Get Connected </h2>
        <p>reach me out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:jariwala.yash02@gmail.com">jariwala.yash02@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/yash-jariwala-linked-in/">linkedin.com/Yash-Jariwala</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/yashjariwala01">github</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/whatsapp.png")} width={50} height={60} alt="whatsapp icon" />
          <a href="https://wa.me/919009651043">whatsapp</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact