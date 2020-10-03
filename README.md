# Storybook Addon VSCode Source

A simple storybook addon that opens the source file of the component directly. In local/dev, it opens `vs code` and in prod deployment, it opens the file in `github` repository.

![An animated gif of the addon](https://media.giphy.com/media/vUy3v9B9yWZh3Il3Dr/giphy.gif)

## Getting Started.

> Prerequistive: A working storybook setup

### 1. Install the dev dependencies:

`yarn add -D storybook-vscode-component babel-plugin-macros paths.macro`

Note: We are using `babel-plugin-macros` & `paths.macro` for getting file paths easily.

### 2. Add the addon to storybook configuration (`.storybook/addon.js` or `.storybook/main.js`)

```js
//.storybook/addon.js [deprecated]
import 'storybook-vscode-component/register';

//       or

// .storybook/main.js
module.exports = {
  stories: [
    // ....
  ],
  addons: [
    '@storybook/addon-links',
    //...
    'storybook-vscode-component/register',
  ],
};
```

### 3. Set Global parameters under the parameter `storySource`.

You may set three global parameters:

| Parameter    | Description                                            |                                         |
| ------------ | ------------------------------------------------------ | --------------------------------------- |
| `workingDir` | Path of curent working/root directory                  | Required                                |
| `repository` | Url of github repository - to open the files in github | Optional                                |
| `branch`     | The default branch of github repo                      | Optional, points to `master` by default |

```js
// .storybook/preview.js
import { wd } from 'paths.macro';

export const parameters = {
  storySource: {
    repository: 'https://github.com/example/repo-name',
    workingDir: wd || '/Usr/vilva/Desktop/project-name',
    branch: 'branch1',
  },
};
```

### 4. Start writing your stories

Now you can start writing your stories and pass story level or component level parameters.

There are two possible parameters:

| Parameter       | Description                                                                                                                                                   | Value                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `componentPath` | Path of the component used in the story                                                                                                                       | Either the Absolute path of the component file or path of the file path from the root | Optional |
| `storyPath`     | Path of the story file assuming both story and component stays in same folder with naming conventions - component: `Button.js` and story: `Button.stories.js` | Either the Absolute path of the story file or path of the file path from the root     | Optional |

One of the above two parameters are mandatory and without these, the addon will disappear.

#### Sample stories

##### Component level parameters

```js
// Component level parameters
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    storySource: {
      componentPath:
        '/src/Button/Button.js' ||
        '/Usr/vilva/Desktop/storybook/src/Button/Button.js',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

//  or

storiesOf('Button', module)
  .addParameters({
    storySource: {
      componentPath:
        '/src/Button/Button.js' ||
        '/Usr/vilva/Desktop/storybook/src/Button/Button.js',
    },
  })
  .add('Primary', () => <Button />);
```

##### Story level Parameters

```js
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    storySource: {
      componentPath:
        '/src/Button/Button.js' ||
        '/Usr/vilva/Desktop/storybook/src/Button/Button.js',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.parameters = {
  storySource: {
    componentPath: '/src/Button/Button.js',
  },
};
```

##### Path of the Story - `storyPath`

> Note: This parameter should be used only when the story and corresponding component are in same folder and with same name. Assume if the component is in `src/Button/Button.js` file, and only if the story is in `src/Button/Button.stories.js` file, this parameter will work. But it works for all types of files, `.js`,`.ts`,`.tsx`.

```js
import { Button } from './Button';
import { fileAbsolute } from 'paths.macro';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    storySource: {
      componentPath:
        '/src/Button/Button.js' ||
        '/Usr/vilva/Desktop/storybook/src/Button/Button.js',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.parameters = {
  storySource: {
    storyPath:
      fileAbsolute ||
      '/Usr/vilva/Desktop/storybook/src/Button/Button.stories.js' ||
      '/src/Button/Button.stories.js',
  },
};
```
