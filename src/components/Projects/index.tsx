import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { StyledProjectItem } from "./styles";

import styles from "./styles.module.scss";

import Search from "./search";
import { useSelector } from "react-redux";

const Projects = () => {
  type ProjectProp = {
    id: number;
    name: string;
    image?: string;
  };

  type RootState = {
    projects: {
      projects: Array<ProjectProp>;
      filteredProjects: Array<ProjectProp>;
    };
  };

  const projects = useSelector((state: RootState) => state.projects);

  let listProjects = projects.filteredProjects || projects.projects;

  // const listImages = [image1, image2, image3, image4, image5, image6];

  console.log('listProjects', listProjects);

  return (
    <div className={styles.wrapper}>
      <Search />
      <div className={styles.gridProjects}>
        {listProjects &&
          listProjects.map((item: ProjectProp, key) => {
            return (
              <Link
                to={`/project-view/${item.id}`}
                className={styles.projectItemLink}
                key={key}
              >
                <StyledProjectItem bgImage={item.image || ''}>
                  <div className={styles.overlay}></div>
                  <div className={styles.projectTitle}>{item.name}</div>
                </StyledProjectItem>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
