import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import globalStyles from "styles/global";
import typeStyles from "styles/typography";
import dimensions from "styles/dimensions";
import Header from "components/Header";
import "styles/fonts.scss";

const LayoutContainer = styled.div`
  padding-left: ${dimensions.paddingHorizontalDesktop}em;
  padding-right: ${dimensions.paddingHorizontalDesktop}em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: ${dimensions.paddingHorizontalTablet}em;
    padding-right: ${dimensions.paddingHorizontalTablet}em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-left: ${dimensions.paddingHorizontalMobile}em;
    padding-right: ${dimensions.paddingHorizontalMobile}em;
  }

  .Layout__content {
    padding-bottom: 5em;
    margin: auto;
    text-align: center;
    max-width: 1000px;
  }
`;

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={() => (
        <LayoutContainer className="div">
          <Global styles={[globalStyles, typeStyles]} />
          <Header />
          <main className="Layout__content">{children}</main>
        </LayoutContainer>
      )}
    />
  );
}
