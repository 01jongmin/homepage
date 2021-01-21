import React from "react";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import PropTypes from "prop-types";

const ProjectCardContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 7fr;
  text-align: left;
  color: currentColor;

  @media (max-width: 950px) {
    grid-template-columns: 4.5fr 7fr;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 2em;
  }
`;

const ProjectCardContent = styled("div")`
  background: white;
  padding: 4em 3em 2.25em 3em;

  @media (max-width: 950px) {
    padding: 1.25em 2.5em 2em 2.5em;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 2;
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
  margin-bottom: 5em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 2.5em;
  }
`;

const ProjectCardImageContainer = styled("div")`
  display: flex;
  padding: 4em 3em 2.25em 3em;
  max-width: 100%;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    flex-direction: column;
    align-items: center;
    padding: 4em 3em 0em 3em;
  }

  img {
    max-width: 100%;
  }
`;

const ProjectCard = ({ category, title, description, thumbnail, children }) => (
  <ProjectCardContainer>
    <ProjectCardContent className="ProjectCardContent">
      <ProjectCardCategory>{category}</ProjectCardCategory>
      <ProjectCardTitle>{title}</ProjectCardTitle>
      <ProjectCardBlurb>{description}</ProjectCardBlurb>
    </ProjectCardContent>
    <ProjectCardImageContainer className="ProjectCardImageContainer">
      {children}
    </ProjectCardImageContainer>
  </ProjectCardContainer>
);

export default ProjectCard;

ProjectCard.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
