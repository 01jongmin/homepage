import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import resume from "../../static/resume.pdf";

//config.autoAddCss = false;

const Hero = styled("div")`
  margin: auto;
  text-align: center;
  padding-top: 2.5em;
  padding-bottom: 1rem;

  h1 {
    font-weight: 400;
  }

  h3 {
    font-size: 1em;
    font-weight: 300;
  }

  hr {
    margin-top: 2em;
    border-style: solid;
    color: rgba(0, 0, 0, 0.2);
  }
`;

const LinksWrapper = styled.div`
  display: block;
  font-size: 1.5em;
  text-align: center;

  a {
    margin: 0.25em;
    text-decoration: none;
    color: inherit;
    transition: 0.1s;
  }
`;

const Bio = styled.div`
  max-width: 60ch;
  margin: auto;
  text-align: center;
  font-weight: 400;

  a {
    text-decoration: underline;
    color: inherit;
  }
`;

const RenderBody = ({ meta }) => (
  <>
    <Helmet
      title={meta.title}
      titleTemplate={`${meta.title}`}
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
    <Hero>
      <h1>Jong Min Choi </h1>
      <h3>Computer Science + Management @ M&T</h3>

      <LinksWrapper>
        <a href="https://github.com/01jongmin/">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/jong-min-choi">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="mailto: jongmin@seas.upenn.edu">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </LinksWrapper>
      <hr />
    </Hero>
    <Bio>
      <p>
        Hi, I’m Jong Min. I am a sophomore at the University of Pennsylvania as
        part of the 
        <a href="https://fisher.wharton.upenn.edu/">
          Management & Technology
        </a>{" "}
        dual-degree program majoring in Computer Science from Penn Engineering
        and Management from the Wharton School
      </p>
      <p>
        I work as an iOS developer at{" "}
        <a href="https://pennlabs.org">Penn Labs</a> and as a Teaching Assistant
        for the{" "}
        <a href="https://www.seas.upenn.edu/~cis121/current/">
          Data Structures and Algorithms
        </a>{" "}
        course at Penn. You can find my resume <a href={resume}>here</a>.
      </p>
    </Bio>
  </>
);

export default ({ data }) => {
  const meta = data.site.siteMetadata;

  return <Layout>{<RenderBody meta={meta} />}</Layout>;
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
