import { within, userEvent } from '@storybook/testing-library';
import MyPage from './Page.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Example/Page',
  component: MyPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MyPage>;

export const LoggedOut: StoryObj<typeof meta> = {};

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const LoggedIn: StoryObj<typeof meta> = {
  render: () => ({
    components: {
      MyPage,
    },
    template: '<my-page />',
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};

export default meta;
