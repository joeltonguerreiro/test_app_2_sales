import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import FooterMenu from "../FooterMenu";
import Header from "../Header";

import {
  StyledProjectViewBanner,
  StyledProjectViewTitle,
  StyledWrapper,
  StyledActionFiles,
} from "./styles";
import { FaArrowLeft } from "react-icons/fa";

import { IconTimeline, IconFolder } from "./icons";

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
      <StyledWrapper>
        <StyledProjectViewTitle>
          <NavLink to="/" className="project-title">
            <FaArrowLeft /> &nbsp; {selectedProject.name}
          </NavLink>
          <NavLink className="edit-project" to="/edit-project">
            EDITAR PROJETO
          </NavLink>
        </StyledProjectViewTitle>
        <StyledProjectViewBanner bgImage={selectedProject.image || ""} />
        <StyledActionFiles>
          <div className="icon-group active">
            {" "}
            <IconTimeline /> Linha do tempo
          </div>
          <div className="icon-group">
            {" "}
            <IconFolder /> Pastas
          </div>
        </StyledActionFiles>
      </StyledWrapper>
      <FooterMenu />
    </>
  );
};

export default ProjectView;
