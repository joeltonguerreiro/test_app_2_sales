import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import {FILTER} from "../../constants/actionTypes";

import styles from "./styles.module.scss";
import { StyledGridProjects, StyledProjectItem } from "./styles";

import Search from "./search";

const Projects = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FILTER, payload: { text: "" } });
  }, [dispatch])

  type ProjectProp = {
    id: number;
    name: string;
    image?: string;
  };

  type RootState = {
    projects: {
      listProjects: Array<ProjectProp>;
      filteredProjects: Array<ProjectProp>;
      textFilter: string
    };
  };

  const projects = useSelector((state: RootState) => state.projects);

  let listProjects = projects.listProjects;

  if (projects.textFilter !== '') {
    listProjects = projects.filteredProjects;
  }

  return (
    <div className={styles.wrapper}>
      <Search />
      <StyledGridProjects>
        {listProjects &&
          listProjects.map((item: ProjectProp, key) => {
            return (
              <Link
                to={`/project-view/${item.id}`}
                className={styles.projectItemLink}
                key={key}
              >
                <StyledProjectItem bgImage={item.image || ""}>
                  <div className={styles.overlay}></div>
                  <div className={styles.projectTitle}>{item.name}</div>
                </StyledProjectItem>
              </Link>
            );
          })}
      </StyledGridProjects>
    </div>
  );
};

export default Projects;
