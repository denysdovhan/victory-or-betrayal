import React, { PropTypes } from 'react';
import styles from 'styles/SocialLinks';

const SocialLinks = ({ text, url }) => {
  const link = encodeURIComponent(url);
  const fb = `http://www.facebook.com/sharer.php?u=${link}`;
  const tw = `http://twitter.com/intent/tweet?url=${link}&text=${text}`;
  const vk = `http://vk.com/share.php?url=${link}`;

  return (
    <div className={styles.social}>
      { 'поділитись через '}
      <a href={tw} target='_blank'>Twitter</a>
      {', '}
      <a href={fb} target='_blank'>Facebook</a>
      {' або '}
      <a href={vk} target='_blank'>ВКонтакті</a>
    </div>
  );
};

SocialLinks.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default SocialLinks;
