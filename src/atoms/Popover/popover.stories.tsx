// src/components/CommonMenu.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CommonMenu from './Popover';

export default {
  title: 'Atoms/CommonMenu',
  component: CommonMenu,
} as Meta<typeof CommonMenu>;

const Template: StoryFn<typeof CommonMenu> = (args) => <CommonMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatarSrc: 'https://via.placeholder.com/40',
  menuItems: [
    { id: '1', content: 'Item 1', onClick: () => alert('Item 1 clicked') },
    { id: '2', content: 'Item 2', onClick: () => alert('Item 2 clicked') },
    { id: '3', content: 'Item 3', onClick: () => alert('Item 3 clicked') },
  ],
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  avatarSrc: 'https://via.placeholder.com/40',
  menuItems: [
    {
      id: '1',
      content: <div><h3>Item 1</h3><p>This is some custom content for item 1.</p></div>,
      onClick: () => alert('Item 1 clicked'),
    },
    {
      id: '2',
      content: <div><h3>Item 2</h3><p>This is some custom content for item 2.</p></div>,
      onClick: () => alert('Item 2 clicked'),
    },
    {
      id: '3',
      content: <div><h3>Item 3</h3><p>This is some custom content for item 3.</p></div>,
      onClick: () => alert('Item 3 clicked'),
    },
  ],
};
