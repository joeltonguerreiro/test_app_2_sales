import React, { useEffect } from "react";

import { StyledProjectItem } from "./styles";

import styles from "./styles.module.scss";

import image1 from "../../images/image.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import image5 from "../../images/image5.png";
import image6 from "../../images/image6.png";

import Search from "./search";
import { useSelector } from "react-redux";

const Projects = () => {

    type ProjectProp = {
        name: string;
        image?: string;
    }

  type RootState = {
    projects: {
        projects: Array<ProjectProp>;
        filteredProjects: Array<ProjectProp>
    };
  };

  const projects = useSelector((state: RootState) => state.projects);

  let listProjects = projects.filteredProjects || projects.projects;

  useEffect(() => {
    console.log('projects', projects);
  }, [projects])

const listImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
]

  return (
    <div className={styles.wrapper}>
      <Search />
      <div className={styles.gridProjects}>

        {listProjects && listProjects.map((item: ProjectProp, key) => {
            return <StyledProjectItem bgImage={listImages[key]}>
            <div className={styles.projectTitle}>{item.name}</div>
          </StyledProjectItem>
        })}

        {/* <StyledProjectItem bgImage={image1}>
          <div className={styles.projectTitle}>Cooporativo II</div>
        </StyledProjectItem>
        <StyledProjectItem bgImage={image2}>
          <div className={styles.projectTitle}></div>
        </StyledProjectItem>
        <StyledProjectItem bgImage={image3}>
          <div className={styles.projectTitle}></div>
        </StyledProjectItem>
        <StyledProjectItem bgImage={image4}>
          <div className={styles.projectTitle}></div>
        </StyledProjectItem>
        <StyledProjectItem bgImage={image5}>
          <div className={styles.projectTitle}></div>
        </StyledProjectItem>
        <StyledProjectItem bgImage={image6}>
          <div className={styles.projectTitle}></div>
        </StyledProjectItem> */}
      </div>
    </div>
  );
};

export default Projects;
