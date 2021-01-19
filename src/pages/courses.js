import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import Nested from "components/NestedList";
//import ProjectCard from "components/ProjectCard";

const Course = ({ projects, meta }) => (
  <>
    <Helmet
      title={`Courses`}
      titleTemplate={`%s`}
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
      <div style={{ textAlign: "left" }}>
        <p>Below are the coursework I have taken during my time at Penn</p>
        <ul>
          <li> Test1 </li>
          <li> Test2 </li>
        </ul>
      </div>

      <Nested />
    </Layout>
  </>
);

export default ({ data }) => {
  const meta = data.site.siteMetadata;

  return <Course meta={meta} />;
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
