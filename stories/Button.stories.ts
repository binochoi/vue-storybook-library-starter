import MyButton from './Button.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClick: {},
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof MyButton>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary: StoryObj<typeof meta> = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: StoryObj<typeof meta> = {
  args: {
    label: 'Button',
  },
};

export const Large: StoryObj<typeof meta> = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: StoryObj<typeof meta> = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export default meta;