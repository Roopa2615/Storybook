// src/components/TextInput.stories.tsx
import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextInput, { TextInputProps } from './TextInput';

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
  tags:['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'password', 'email', 'number'],
    },
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn<TextInputProps> = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    args.onChange(event);
  };

  return <TextInput {...args} value={value} onChange={handleChange} />;
};

export const Text = Template.bind({});
Text.args = {
  label: 'Text Input',
  type: 'text',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password Input',
  type: 'password',
};

export const Email = Template.bind({});
Email.args = {
  label: 'Email Input',
  type: 'email',
};

export const Number = Template.bind({});
Number.args = {
  label: 'Number Input',
  type: 'number',
};