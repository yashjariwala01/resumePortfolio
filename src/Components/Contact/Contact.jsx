import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Get Connected </h2>
        <p>reach me out!</p>
      </div>
      <ul className={styles.links} style={{alignItems:'start'}}>
        <li className={styles.link}>
          <HiOutlineMail style={{color:'white'}}/>
          <a href="mailto:jariwala.yash02@gmail.com">jariwala.yash02@gmail.com</a>
        </li>
        <li className={styles.link}>
          <FaLinkedin style={{color:"white"}} />
          <a href="https://www.linkedin.com/in/yash-jariwala-linked-in/">linkedin.com/Yash-Jariwala</a>
        </li>
        <li className={styles.link}>
          <FaGithub style={{color:"white"}}/>
          <a href="https://github.com/yashjariwala01">github</a>
        </li>
        <li className={styles.link}>
          <FaWhatsapp style={{color:"white"}}/>
          <a href="https://wa.me/919009651043">whatsapp</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact