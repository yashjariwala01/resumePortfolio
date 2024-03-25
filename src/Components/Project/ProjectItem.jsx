import React from 'react'
import styles from './ProjectItem.module.css'
import { getImageUrl } from '../../utils'

const ProjectItem = ({project}) => {
  return (
    <div className={styles.flexItem} key={project.id}>

    <div className={styles.flexItemContainer}>
    <img src={getImageUrl(project.imageSrc)} alt={`image of ${project.title}`} className={styles.image} />
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.btns}>
          <button className={styles.btn}><a href={project.demo}>Demo</a></button>
          <button className={styles.btn}><a href={project.source}>Github</a></button>
        </div>
        <ul className={styles.skills}>
        {
            project.skills.map((skill,id)=>(
            <li key={id} className={styles.skill}>
                {skill}
            </li>))
        }
        </ul>
    </div>

    </div>
  )
}

export default ProjectItem
