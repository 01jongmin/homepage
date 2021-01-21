import React from "react";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import PropTypes from "prop-types";

const ProjectCardContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 7fr;
  text-align: left;
  max-height: 40%;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCardContent = styled("div")`
  padding: 4em 3em 2.25em 3em;

  @media (max-width: 1000px) {
    grid-row: 2;
    padding: 1.25em 2.5em 1.25em 2.5em;
  }
`;

const ProjectCardCategory = styled("h6")`
  font-weight: 600;
  color: ${colors.grey600};
`;

const ProjectCardTitle = styled("h3")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`;

const ProjectCardBlurb = styled("div")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;

  @media (max-width: 1000px) {
    margin-bottom: 2.5em;
  }
`;

//padding: 4em 3em 2.25em 3em;
//padding: 4em 3em 0em 3em;
const ProjectCardImageContainer = styled("div")`
  padding-top: 4em;
  padding-right: 3em;
  align-items: center;

  @media (max-width: 1000px) {
    padding-top: 0.5em;
    padding-right: 2.5em;
    padding-left: 2.5em;
    flex-direction: column;
  }
`;

const ProjectCard = ({
  category,
  title,
  description,
  role,
  others,
  children,
}) => (
  <ProjectCardContainer>
    <ProjectCardContent className="ProjectCardContent">
      <ProjectCardCategory>{category}</ProjectCardCategory>
      <ProjectCardTitle>{title}</ProjectCardTitle>
      <ProjectCardBlurb>{description}</ProjectCardBlurb>
      <ProjectCardBlurb>{role}</ProjectCardBlurb>
      {others}
    </ProjectCardContent>
    <ProjectCardImageContainer className="ProjectCardImageContainer">
      {children}
    </ProjectCardImageContainer>
  </ProjectCardContainer>
);

export default ProjectCard;
