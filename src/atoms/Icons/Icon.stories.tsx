// src/stories/Icon.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Icon, { IconProps} from './Icons'

export default {
  title: 'Atoms/DynamicIcon',
  component: Icon,
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['search', 'user'],
    },
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
    fill: {
      control: { type: 'color' },
    },
  },
} as Meta;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  name: 'search',
  width: '24',
  height: '24',
  fill: 'blue',
};

export const UserIcon = Template.bind({});
UserIcon.args = {
  name: 'user',
  width: '24',
  height: '24',
  fill: 'green',
};
