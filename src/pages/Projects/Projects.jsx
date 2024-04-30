import React, { useRef } from "react";
import { Page } from "../../components/Page";
import { projects } from "../../data";
import { NextButton } from "./carasoulButton";
import { ProjectItem } from "./ProjectItem";
import { Carasoul, ProjectContainer } from "./Projects.styled";

export const Projects = () => {
  const ref = useRef(null);

  const moveLeft = () => {
    if (ref.current) {
      ref.current.scrollLeft -= 600;
    }
  };

  const moveRight = () => {
    if (ref.current) {
      ref.current.scrollLeft += 600;
    }
  };

  return (
    <Page header="Projects">
      <ProjectContainer ref={ref}>
        <div className="wrapper">
          {projects.map((data, index) => (
            <ProjectItem data={data} key={index} index={index} />
          ))}
        </div>
      </ProjectContainer>
      <Carasoul>
        
        <NextButton onClick={moveLeft} />
      </Carasoul>
    </Page>
  );
};
