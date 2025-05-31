import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

type ANewTabProps = {
  to: string;
  children?: React.ReactElement;
  text?: string;
} & React.AnchorHTMLAttributes<any>;

// Opens links in new tab - used in IndexHeader for social media links
export const ANewTab = ({ to, children, text, ...props }: ANewTabProps) => (
  <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
    {children || text || ''}
  </a>
);

// Fixed BannerImage component with proper TypeScript types
export const BannerImage = ({ img, alt, style = {} }: {
  img: any;
  alt: string;
  style?: React.CSSProperties;
}) => (
  <span style={{ textAlign: 'center' }}>
    <GatsbyImage
      image={img.childImageSharp.gatsbyImageData}
      style={{ maxWidth: 667, marginBottom: 40, ...style }}
      alt={alt}
    />
  </span>
);

// Shortens long text with ellipsis - used in other components
export const truncateWithElipsis = (s: string, maxLength: number): string => {
  let truncated = s.slice(0, maxLength);
  if (truncated.length !== s.length) {
    truncated += '…';
  }

  return truncated;
};