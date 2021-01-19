import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";

const WorkTitle = styled("h1")`
  margin-bottom: 1em;
`;

const Work = ({ projects, meta }) => (
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
      <>
        <ProjectCard
          category={"Project Category"}
          title={"Project Title"}
          description={"A project"}
          thumbnail={{
            url:
              "https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg",
          }}
          uid={"Test"}
        />
      </>
    </Layout>
  </>
);

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
