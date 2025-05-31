import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const styles = {
  root: {
    marginBottom: '1.45rem',
  },
  imageContainer: { 
    display: 'flex', 
    flex: 1, 
    minWidth: 110 
  },
  // Creates circular crop of the image
  imageStyle: {
    clipPath: 'circle(49% at center 50%)',
    objectPosition: '1px -1px',
  },
};

const ProfilePicture = () => (
  <div style={{ ...styles.root, flexBasis: 125 }}>
    {/* Gatsby's optimized image component with circular styling */}
    <StaticImage
      width={250}
      height={250}
      src="../images/face.jpg" // CHANGED: Path to your profile photo
      alt="A picture of Sonali Rajput (heyiamsra)" // CHANGED: Alt text with your name
      imgStyle={styles.imageStyle}
      style={{ ...styles.imageContainer }}
    />
  </div>
);

export default ProfilePicture;