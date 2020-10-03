import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

import { useSelector } from "react-redux";
import FooterMenu from "../FooterMenu";
import Header from "../Header";

import { StyledHeadProjectView } from "./styles";

const ProjectView = (props: any) => {
  type ProjectProp = {
    id: number;
    name: string;
    image?: string;
  };

  const [selectedProject, setSelectedProject] = useState<ProjectProp>({
    id: 0,
    name: "",
    image: "",
  });

  type RootState = {
    projects: {
      projects: Array<ProjectProp>;
      filteredProjects: Array<ProjectProp>;
    };
  };

  const projects = useSelector((state: RootState) => state.projects);

  let listProjects = projects.filteredProjects || projects.projects;

  useEffect(() => {
    console.log(props);

    if (listProjects !== undefined) {
      let filtered = listProjects.filter((item) => {
        return Number(item.id) === Number(props.match.params.id);
      });

      console.log("filtered", filtered);

      setSelectedProject(filtered[0]);
    }
  }, [listProjects, props]);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.projectViewTitle}>
          <NavLink to="/">
            <span>{"<--  "}</span>
            {selectedProject.name}
          </NavLink>
        </div>
        <StyledHeadProjectView bgImage={selectedProject.image || ""} />
      </div>
      <FooterMenu />
    </>
  );
};

export default ProjectView;
