import addons, { types } from '@storybook/addons';
import * as React from 'react';
import OpenButton from './OpenButton';

addons.register('vs-code-file-open', () => {
  addons.add('open-src', {
    type: types.TOOL,
    title: 'Open source',
    match: ({ viewMode }) => viewMode === 'story',
    render: () => {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <OpenButton />
        </div>
      );
    },
  });
});
