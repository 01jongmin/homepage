import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";
import Carousel from "react-material-ui-carousel";
import isefPaper from "../../static/isef.pdf";

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      iphone: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "iphone" }
        }
        sort: { order: ASC, fields: [name] }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      isef: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "isef" }
        }
        sort: { order: ASC, fields: [name] }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author
          twitterUsername
        }
      }
    }
  `);

  const pennMobile = data.iphone.edges;
  const isef = data.isef.edges;
  const meta = data.site.siteMetadata;

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
          description={`Penn Mobile serves over 2000 weekly, 5000 monthly users in the Penn 
            community to do anything from check dining hours & menus, book study rooms, and much more!
            `}
          role={`I implemented a screen that requires authentication using Local Authentication to
                retrieves user's student card PIN code as well as 
                spearheaded the dining redesign efforts in SwiftUI.`}
          others={
            <>
              You can find the repository{" "}
              <a
                href={"https://github.com/pennlabs/penn-mobile-ios"}
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                here
              </a>{" "}
              .
            </>
          }
        >
          <Carousel autoPlay={false} indicators={true}>
            {pennMobile.map((image) => (
              <Img
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
              />
            ))}
          </Carousel>
        </ProjectCard>
        <ProjectCard
          category={"Research"}
          title={"Intel ISEF"}
          description={`Intel ISEF is the world's largest international pre-college science competition.`}
          role={`I represented Hong Kong as one of six projects with my research into Dye-Sensitized Solar Cells
              at the 70th annual competition.`}
          others={
            <>
              You can read my paper{" "}
              <a
                href={isefPaper}
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                {" "}
                here
              </a>
              .
            </>
          }
        >
          <Carousel autoPlay={false} indicators={true}>
            {isef.map((image) => (
              <Img
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
              />
            ))}
          </Carousel>
        </ProjectCard>
      </Layout>
    </>
  );
};

export default () => {
  return <Work />;
};
//<ProjectCard
//category={"Research"}
//title={"Intel ISEF"}
//description={`Penn Mobile is an app with over 2000 weekly, 5000 monthly users that helps the Penn
//community do anything from check dining hours & menus, book study rooms, and much more!
//`}
//>
//<Carousel autoPlay={false} indicators={true}>
//{items.map((item) => (
//<img src={item} />
//))}
//</Carousel>
//</ProjectCard>
