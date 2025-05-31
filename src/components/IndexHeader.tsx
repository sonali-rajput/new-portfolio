import React from 'react';

import { ANewTab } from './util';
import githubLogo from '../images/social/github.svg';
import twitterLogo from '../images/social/twitter.svg';
import mastodonLogo from '../images/social/mastodon.svg';
import linkedinLogo from '../images/social/linkedin.svg';
const styles = {
  headerWrapper: {
    background: 'rgb(248, 187, 208)', // CHANGED: Light pink background for social header
    marginBottom: '0',
    display: 'flex',
  },
  header: {
    margin: '0 auto',
    padding: '0.25rem',
    display: 'flex',
    flex: 1,
    flexDirection: 'row' as const,
    justifyItems: 'space-between' as const,
  },
  textLink: {
    paddingTop: 1,
    paddingLeft: 4,
    paddingRight: 4,
  },
  logoLinks: { paddingRight: 2 },
  logoLink: { display: 'inline', paddingLeft: 6, paddingRight: 6 },
  logo: { marginBottom: 0, marginTop: 6 },
  leftLinks: {
    display: 'flex',
    flex: 1,
  },
  rightLinks: {
    display: 'flex',
    flex: 0.2,
    justifyContent: 'flex-end',
    fontStyle: 'italic',
  },
};

interface LogoLinkProps {
  logoImage: string;
  url: string;
  alt?: string;
  style?: React.CSSProperties;
}

// Component for individual social media links
const LogoLink: React.FC<LogoLinkProps> = ({
  logoImage,
  url,
  alt = '',
  style = {},
}) => (
  <div style={{ ...styles.logoLink, ...style }}>
    <ANewTab to={url}>
      <img src={logoImage} alt={alt} height={16} style={styles.logo} />
    </ANewTab>
  </div>
);

// Container for all social media links
const LogoLinks = () => (
  <div style={styles.logoLinks}>
    <LogoLink
      logoImage={githubLogo}
      url="https://github.com/sonali-rajput" // CHANGED: Your GitHub profile
      alt="Github logo with transparent background"
    />
    <LogoLink
      logoImage={twitterLogo}
      url="https://x.com/heyiamsra" // CHANGED: Your Twitter/X profile
      alt="Twitter logo with transparent background"
    />
    <LogoLink
      logoImage={mastodonLogo}
      url="https://mastodon.social/@heyiamsra" // CHANGED: Your Mastodon profile
      alt="Mastodon logo"
      style={{ marginLeft: -2, marginRight: 2 }}
    />
    <LogoLink
      logoImage={linkedinLogo}
      url="https://www.linkedin.com/in/sonalirajput/" // CHANGED: Your LinkedIn profile
      alt="LinkedIn logo with transparent background"
      style={{ paddingLeft: 2 }}
    />
  </div>
);

// Main header component with social links
const Header = () => (
  <div style={styles.headerWrapper}>
    <div style={styles.header}>
      <div style={styles.leftLinks}>
        <LogoLinks />
      </div>

      <div style={styles.rightLinks}>
        <a href="/imprint/" style={styles.textLink}>
          Imprint
        </a>
      </div>
    </div>
  </div>
);

export default Header;