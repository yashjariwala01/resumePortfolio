import React, { useEffect, useState } from 'react'
import styles from "./Project.module.css"
import { ProjectData } from './Data'
import { projectsNav } from './Data'
import ProjectItem from './ProjectItem'

const Project = () => {
    const [item,setItem] = useState({name:'Major projects'});
    const [projects, setProjects] = useState([]);
    const [active,setActive] = useState(0);

    useEffect(()=>{
        if(item.name == 'Major projects'){
            const majorProject = ProjectData.filter(project=> project.category === item.name)
            setProjects(majorProject);
        }else{
            const newProjects = ProjectData.filter(project=> project.category === item.name)
            setProjects(newProjects);
        }
        console.log(item.name)
    },[item]);

    const handleClick=(e,index)=>{
        setItem({name:e.target.textContent})
        setActive(index)
        console.log(active)
    }

  return (
    <div>
      <section className={styles.container} id='projects'>
        <h2 className={styles.title}>Portfolio</h2>
        <span className={styles.subtitle}>Most Recent projects</span>

        <div className={styles.main}>
            <div className={styles.workFilters}>
                {
                    projectsNav.map((element, index)=>(<span onClick={(e)=>handleClick(e,index)} className={`${styles.filterItems} ${active === index ? styles.active : ''}`} key={index}>{element.name}</span>))
                }
            </div>

            <div className={`${styles.projectContainer} ${styles.cardContainer} ${styles.grid}` }>
                {
                    projects.map((project)=><ProjectItem project={project} key={project.id} />)
                }
            </div>
   </div>
      </section>
    </div>
  )
}

export default Project
