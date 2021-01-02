import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "components/Layout";
//import ProjectCard from "components/ProjectCard";

const WorkTitle = styled("h1")`
  margin-bottom: 1em;
`;

const Work = ({ projects, meta }) => (
  <>
    <Helmet
      title={`Work | Prist, Gatsby & Prismic Starter`}
      titleTemplate={`%s | Work | Prist, Gatsby & Prismic Starter`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `Work | Prist, Gatsby & Prismic Starter`,
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
          content: meta.author,
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
      <WorkTitle>Work</WorkTitle>
    </Layout>
  </>
);

export default ({ data }) => {
  //const projects = data.prismic.allProjects.edges;
  const meta = data.site.siteMetadata;
  //if (!projects) return null;

  return <Work meta={meta} />;
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
