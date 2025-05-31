import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import './layout.css';
import Header from './header';
import HeaderMobile from './HeaderMobile';

const styles = {
  root: {
    margin: '0 auto',
    maxWidth: 1080,
    padding: '0px 1.0875rem 1.45rem',
    paddingTop: '1.45rem',
    backgroundColor: 'rgb(233 30 99 / 11%)', // Will be overridden by layout.css baby pink background
  },
};

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({
  showHeader = true,
  children,
  title,
  description,
  siteName,
  style = {},
  image,
  meta = [],
}) => {
  const data = useStaticQuery(query);
  return (
    <>
      <Helmet
        title={
          title
            ? `${title} - ${data.site.siteMetadata.title}`
            : data.site.siteMetadata.title
        }
        meta={[
          {
            name: 'og:title',
            content: title ? title : data.site.siteMetadata.title,
          },
          {
            name: 'og:site_name',
            content: siteName ?? 'Homepage of Sonali Rajput / heyiamsra',
          },
          ...(description
            ? [
                {
                  name: 'og:description',
                  content: description || 'Homepage of Sonali Rajput / heyiamsra',
                },
                {
                  name: 'description',
                  content: description || 'Homepage of Sonali Rajput / heyiamsra',
                },
              ]
            : []),
          ...(image ? [{ name: 'og:image', content: image }] : []),
          {
            name: 'keywords',
            content: 'Sonali Rajput, heyiamsra',
          },
          {
            name: 'twitter:site',
            content: 'heyiamsra',
          },
          {
            name: 'twitter:creator',
            content: 'heyiamsra',
          },
          {
            name: 'twitter:title',
            content: title ? title : data.site.siteMetadata.title,
          },
          ...meta,
        ]}
      >
        <html lang="en" />
      </Helmet>

      {showHeader ? (
        <>
          <HeaderMobile />
          <Header />
        </>
      ) : null}

      <div style={{ ...styles.root, ...style }}>{children}</div>
    </>
  );
};

export default Layout;