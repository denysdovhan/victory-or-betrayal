import React from 'react';
import Helmet from 'react-helmet';

const Meta = ({ title }) => {
  const tags = [
    { name: 'description', content: 'Дивишся новини і не можеш розібрати де зрада, а де перемога?' },
    { name: 'twitter:card', content: 'product' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: 'Дивишся новини і не можеш розібрати де зрада, а де перемога?' },
    { name: 'twitter:creator', content: '@denysovhan' },
    { name: 'twitter:image', content: 'https://cloud.githubusercontent.com/assets/3459374/14089732/1b9bb11c-f53f-11e5-90a8-ffd6e0e5aba4.png' },
    { property: 'og:title', content: title },
    { property: 'og:url', content: 'http://denysdovhan.com/victory-or-betrayal/'},
    { property: 'og:image', content: 'https://cloud.githubusercontent.com/assets/3459374/14089732/1b9bb11c-f53f-11e5-90a8-ffd6e0e5aba4.png'},
    { property: 'og:description', content: 'Дивишся новини і не можеш розібрати де зрада, а де перемога?'},
    { property: 'og:site_name', content: 'ПЕРЕМОГА чи ЗРАДА?'}
  ];

  return (
    <Helmet meta={tags}/>
  );
};

export default Meta;
