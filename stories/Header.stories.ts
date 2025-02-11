import MyHeader from './Header.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Example/Header',
  component: MyHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      MyHeader,
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args,
      };
    },
    // Then, the spread values can be accessed directly in the template
    template: '<my-header :user="user" />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MyHeader>;

export const LoggedIn: StoryObj<typeof meta> = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: StoryObj<typeof meta> = {
  args: {
    user: null,
  },
};

export default meta;