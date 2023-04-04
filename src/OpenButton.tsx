import React from 'react';
import { useParameter } from '@storybook/api';
import { Results } from './types';
import { generateUrl } from './utils';
import { githubIcon, vscodeIcon } from './constants';

const OpenButton = () => {
  const results = useParameter<Results>('storySource', {
    storyPath: '',
    componentPath: '',
    workingDir: '',
    repository: '',
    branch: '',
  });
  const { storyPath, componentPath } = results;
  if (!results || (!storyPath && !componentPath)) return null;

  const url = generateUrl(results);

  if (!url) return null;

  return (
    <a href={url} target="_blank" rel="noreferrer" style="display:flex;">
      <img
        style={{
          width: '15px',
        }}
        alt="Open source"
        src={process.env.NODE_ENV === 'development' ? vscodeIcon : githubIcon}
      />
    </a>
  );
};

export default OpenButton;
