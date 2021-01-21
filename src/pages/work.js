import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";
import Carousel from "react-material-ui-carousel";

const WorkTitle = styled("h1")`
  margin-bottom: 1em;
`;

const Work = ({ projects, meta }) => {
  const items = ["../../1.jpg", "../../2.jpg", "../../3.jpg"];

  return (
    <>
      <Helmet
        title={`Work`}
        titleTemplate={`%s`}
        meta={[
          {
            name: `description`,
            content: meta.description,
          },
          {
            property: `og:title`,
            content: `Work`,
          },
          {
            property: `og:description`,
            content: meta.description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: meta.twitterUsername,
          },
          {
            name: `twitter:title`,
            content: meta.title,
          },
          {
            name: `twitter:description`,
            content: meta.description,
          },
        ].concat(meta)}
      />
      <Layout>
        <ProjectCard
          category={"Software Engineering"}
          title={"Penn Mobile"}
          description={`Penn Mobile is an app with over 2000 weekly, 5000 monthly users that helps the Penn 
            community do anything from check dining hours & menus, book study rooms, and much more!
            `}
        >
          <Carousel autoPlay={false}>
            {items.map((item) => (
              <img src={item} />
            ))}
          </Carousel>
        </ProjectCard>
        <ProjectCard
          category={"Research"}
          title={"Intel ISEF"}
          description={`Penn Mobile is an app with over 2000 weekly, 5000 monthly users that helps the Penn 
            community do anything from check dining hours & menus, book study rooms, and much more!
            `}
        >
          <Carousel autoPlay={false}>
            {items.map((item) => (
              <img src={item} />
            ))}
          </Carousel>
        </ProjectCard>
      </Layout>
    </>
  );
};

export default ({ data }) => {
  const meta = data.site.siteMetadata;

  return <Work meta={meta} />;
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        twitterUsername
      }
    }
  }
`;
