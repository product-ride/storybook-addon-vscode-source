import { Results } from './types';

const sanitizeUrl = (url: string) =>
  url && url[url.length - 1] === '/' ? url.slice(0, -1) : url;

const sanitizePath = (path: string) =>
  path[0] === '/' ? path : `${path ? `/${path}` : ''}`;

export const generateUrl = (results: Results) => {
  const {
    storyPath = '',
    componentPath = '',
    workingDir = '',
    repository = '',
    branch,
  } = results;
  if (!workingDir) {
    console.warn(
      'Set a Global parameter of your working directory in .storybook/preview.js. Refer docs for more details',
    );
    return;
  }

  const storyPathFromRoot = sanitizePath(storyPath.replace(workingDir, ''));
  const componentPathFromRoot = sanitizePath(
    componentPath.replace(workingDir, ''),
  );

  if (process.env.NODE_ENV === 'development') {
    // For developmemnt open VS code
    if (componentPathFromRoot)
      return `vscode://file${workingDir}${componentPathFromRoot}`;

    return `vscode://file${workingDir}${storyPathFromRoot.replace(
      '.stories',
      '',
    )}`;
  }
  // For production open github repo
  if (!repository) {
    console.warn(
      'Set a Global parameter of your Git repository in .storybook/preview.js. Refer docs for more details',
    );
    return;
  }

  if (componentPathFromRoot)
    return `${sanitizeUrl(repository)}/tree/${
      branch || 'master'
    }${componentPathFromRoot}`;

  return `${sanitizeUrl(repository)}/tree/${
    branch || 'master'
  }${storyPathFromRoot.replace('.stories', '')}`;
};
