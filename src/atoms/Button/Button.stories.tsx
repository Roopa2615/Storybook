import React from "react";
import { Meta, StoryFn} from '@storybook/react';
import { Button, ButtonProps } from "./Button";
import { action } from '@storybook/addon-actions';

const meta: Meta = {
    title:'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    args:{
        children:'Default Text',
        variant:'primary'
    },
    argTypes: {
        // onClick: { action: 'clicked' },
        variant: {
          control: { type: 'radio' },
          options: ['primary', 'secondary'],
        },
    },
}

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
  onClick: () => alert('Primary Button Clicked!'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
  onClick: () => alert('Secondary Button Clicked!'),
};


// Primary.argTypes = {
//     onClick: { action: 'primary button clicked' },
// };
  
// Secondary.argTypes = {  
//     onClick: { action: 'secondary button clicked' },
// };