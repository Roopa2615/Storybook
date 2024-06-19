import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Typography, { TypographyProps } from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  tags:['autodocs'],
  argTypes: {
    variant: {
        control: { type: 'select'},
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'],
    },
    color:{
        control:'color'
    }
  },
} as Meta;

const Template: StoryFn<TypographyProps> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hello World!',
  variant: 'h4',
  color:'#000000'
};
