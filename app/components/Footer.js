import React, { PropTypes } from 'react';
import styles from 'styles/Footer';

const Footer = ({ items, version }) => (
  <div className={styles.footer}>
    {items.map((link, i) =>
      <a href={link.href} target='_blank' key={i}>{link.text}</a>
    )}
    { version && (<span>{`v${version}`}</span>)}
  </div>
);

Footer.propTypes = {
  items: PropTypes.array.isRequired,
  version: PropTypes.string
};

export default Footer;
