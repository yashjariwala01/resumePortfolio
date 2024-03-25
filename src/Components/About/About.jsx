import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import CV from '../../srcAssests/Resume.pdf'

const About = () => {
  console.log(CV)
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience in developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <div className={styles.Resume}>
            <a href={CV} download>Download Resume <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG5SURBVHgB7dthTcNAGMbxJwQBSDgH4IDiAAfMAaAAHBAUAAoABcMBOKgE5mD0aPZla9jYPfDuuv8veb80IYE/u+66dhIAAAAAAAAA4L8cdXPTTdvNfIuZdjMRvqVu3rVdyOW5E/QsT8zFXGmPNfLGzPOp/hQS5kBxGvnlmEmBDhUnDRybdXOvzeR4lwPHT7r50B561OqSbX/x80nDy36iQJFLfpQIakZQM4LuoEb95V/eA84rnPx7Pyh4u7Vwobri/TStgqMm1RVs06hFV1ol59AbjU9S4T62JOi5xulYBUouPYeWxks3r6pHXmVp6VhSkKFz0K3qMtXq3zBVAfahZgQ1I6gZQc0IahYdNO9l89WJ60onv0MnBYoMmtTf9UzyadR/0BEmOuhfaBQoMmi+kTaT35sCRd71zDHP1D/xkeSR/0nXChQZNMsBzjQibJvMCGpGUDOCmhHUjKBmBDUjqBlBzQhqRlAzgpoR1IygZgQ1I6gZQc3cn9ifqq4HxpJ2SK3P1K+bFxUoWfJPGqeioCWSxvcqbRVsorqCrYuZtAOS+i/C1vpqbdW/kYZ+zx4AAAAAAAAAavMFS4vuejb7h+YAAAAASUVORK5CYII=" width={30} alt="" /></a>
          </div>
        </ul>
      </div>
      
    </section>
  );
};

export default About