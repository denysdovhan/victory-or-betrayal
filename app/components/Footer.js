import React from 'react';
import styles from 'styles/Footer';
import data from '../data';

const Footer = () => (
  <div className={styles.footer}>
    {data.footer.map(link => {
      return (<a href={link.href} target='_blank'>{link.text}</a>);
    })}
  </div>
);

export default Footer;
