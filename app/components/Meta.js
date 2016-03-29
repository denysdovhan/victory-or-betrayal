import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

const Meta = ({
  title,
  description,
  image = '',
  url = window.location.href
}) => {
  const tags = [
    { name: 'description',         content: description },
    { name: 'twitter:card',        content: 'product' },
    { name: 'twitter:title',       content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image',       content: image },
    { property: 'og:title',        content: title },
    { property: 'og:url',          content: url },
    { property: 'og:image',        content: image },
    { property: 'og:description',  content: description },
    { property: 'og:site_name',    content: title }
  ];

  return (
    <Helmet meta={tags}/>
  );
};

export default Meta;
