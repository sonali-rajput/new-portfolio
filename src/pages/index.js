import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import ProfilePicture from '../components/ProfilePicture';
import {
  IndexLinkBlock,
  IndexLinkBlockSet,
} from '../components/IndexLinkBlock';
import IndexHeader from '../components/IndexHeader';
import './index.css';

const styles = {
  title: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    flexWrap: 'wrap',
  },
  headline: { paddingLeft: '1.25rem', textAlign: 'center' },
  tagLine: { fontSize: 18, paddingBottom: 14 },
};

const TagLine = () => (
<div style={styles.tagLine}>
  I&apos;m a Software Engineer - DevOps, Platform, AI who loves creating and experimenting with technology. 
  When I&apos;m not building cool stuff, you&apos;ll find me learning new skills 
  and sharing knowledge with fellow developers.
</div>
);

const IndexPage = () => {
  return (
    <>
    <IndexHeader />
    <Layout
      showHeader={false}
      description="The homepage of Sonali Rajput / Heyiamsra"
      >
        <div style={styles.title}>
          <h1 style={styles.headline}>Sonali Rajput // Heyiamsra</h1>
          <ProfilePicture />
        </div>

        <TagLine />

        <IndexLinkBlockSet>
          <IndexLinkBlock to="/portfolio/" text="Projects + Work Portfolio" />
          <IndexLinkBlock to="/blog/" text="Blog" />
          <IndexLinkBlock to="/contact/" text="Contact" />
          <IndexLinkBlock to="/professional" text="Professional Skills and Experience" />
        </IndexLinkBlockSet>
      </Layout>
    </>
  )
}
export default IndexPage;























