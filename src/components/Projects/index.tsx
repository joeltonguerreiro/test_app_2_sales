import React from "react";

import { StyledProjectItem } from "./styles";

import styles from "./styles.module.scss";

import image1 from "../../images/image.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import image5 from "../../images/image5.png";
import image6 from "../../images/image6.png";

import iconSearch from "../../icons/search.png";

const Projects = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.projectsHead}>
            <div>Projetos</div>
            <div>
                <img src={iconSearch} alt="" className={styles.iconSearch}/>
            </div>
        </div>
      <div className={styles.gridProjects}>
        <StyledProjectItem bgImage={image1} />
        <StyledProjectItem bgImage={image2} />
        <StyledProjectItem bgImage={image3} />
        <StyledProjectItem bgImage={image4} />
        <StyledProjectItem bgImage={image5} />
        <StyledProjectItem bgImage={image6} />
      </div>
    </div>
  );
};

export default Projects;
