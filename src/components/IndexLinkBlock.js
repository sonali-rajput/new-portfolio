import React, { Children } from 'react';
import { Link } from 'gatsby';

import './indexLinkBlock.css';

const styles = {
   /* Container for all the navigation cards - uses flexbox layout */
    blockSet: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-evenly',
        flexWrap: 'wrap', /* Allows cards to wrap to new line on smaller screens */
    },
    /* Styling for the clickable link wrapper around each card */
    root: {
        textAlign: 'center',
        fontSize: 24,
        display: 'flex',
        flex: 0,
        color: '#2d2d2d',
    },
    block: {
        display: 'flex',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 250,
        height: 150,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(233, 30, 99, 0.4',
        fontWeight: 'bold',
        margin: 25,
        lineHeight: '1.25em',
        paddingLeft: 12,
        paddingRight: 12,
        color: '#2d2d2d',
    },
};

export const IndexLinkBlockSet = ({ children }) => (
    <div style={styles.blockSet}>{children}</div>
);

export const IndexLinkBlock = ({ text, to }) => (
    <Link to={to} style={styles.root}>
        <div style={styles.block} className="index-link-block0content">
            {text}
        </div>
    </Link>
);







