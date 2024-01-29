import type { Preview } from '@storybook/react';
import { Global } from '@emotion/react';
import { globalStyle } from '../src/ui/styles';

const withGlobalStyle = (Story: any) => (
  <>
    <Global styles={globalStyle} />
    <Story />
  </>
);

const preview: Preview = {
  decorators: [withGlobalStyle],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
