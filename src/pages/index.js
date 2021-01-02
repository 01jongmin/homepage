import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Button from "components/_ui/Button";
//import About from "components/About";
import Layout from "../components/Layout";
//import ProjectCard from "components/ProjectCard";
import Header from "components/Header";
import Footer from "components/Footer";
import styles from "styles/typography";

const Hero = styled("div")`
  padding-top: 2.5em;
  padding-bottom: 3em;
  margin-bottom: 6em;
  max-width: 850px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 3em;
  }

  h1 {
    margin-bottom: 1em;

    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;

      &:nth-of-type(1) {
        color: ${colors.blue500};
      }
      &:nth-of-type(2) {
        color: ${colors.orange500};
      }
      &:nth-of-type(3) {
        color: ${colors.purple500};
      }
      &:nth-of-type(4) {
        color: ${colors.green500};
      }
      &:nth-of-type(5) {
        color: ${colors.teal500};
      }

      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;

        &:nth-of-type(1) {
          color: ${colors.blue600};
          background-color: ${colors.blue200};
        }
        &:nth-of-type(2) {
          color: ${colors.orange600};
          background-color: ${colors.orange200};
        }
        &:nth-of-type(3) {
          color: ${colors.purple600};
          background-color: ${colors.purple200};
        }
        &:nth-of-type(4) {
          color: ${colors.green600};
          background-color: ${colors.green200};
        }
        &:nth-of-type(5) {
          color: ${colors.teal600};
          background-color: ${colors.teal200};
        }
      }
    }
  }
`;

const Section = styled("div")`
  margin-bottom: 10em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const WorkAction = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;
  margin-left: auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin: 0 auto;
  }

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    color: ${colors.blue500};
    transition: all 150ms ease-in-out;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`;

const RenderBody = ({ home, meta }) => (
  <>
    <Helmet
      title={meta.title}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: meta.title,
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
    <Hero>
      <div>
        <h1>👋 Hi, I'm Jong Min </h1>
        <h1>
          <div>
            📚 I am a sophomore at the{" "}
            <a href="https://upenn.edu/" target="_blank" rel="noopener">
              University of Pennsylvania
            </a>{" "}
            as part of the{" "}
            <a
              href="https://fisher.wharton.upenn.edu/"
              target="_blank"
              rel="noopener"
            >
              M&T
            </a>{" "}
            dual-degree program majoring in{" "}
            <a href="https://www.cis.upenn.edu/" target="_blank" rel="noopener">
              Computer Science
            </a>{" "}
            from Penn Engineering and{" "}
            <a
              href="https://mgmt.wharton.upenn.edu/"
              target="_blank"
              rel="noopener"
            >
              Management
            </a>{" "}
            from the Wharton School
          </div>
        </h1>
        <h1>
          🖥 I aspire to use technology to build products that solve problems
        </h1>
      </div>
    </Hero>
  </>
);

export default ({ data }) => {
  //Required check for no data being returned
  //const doc = data.prismic.allHomepages.edges.slice(0, 1).pop();
  //const projects = data.prismic.allProjects.edges;
  const meta = data.site.siteMetadata;

  //if (!doc || !projects) return null;

  return <Layout>{<RenderBody meta={meta} />}</Layout>;
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
