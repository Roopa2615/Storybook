import { ReactNode } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Header from "./Header";

export interface HeaderProps {
  children?: ReactNode;
  backgroundColor?: string;
  color?: string;
}

const meta: Meta = {
  title: "Organisms/Header",
  component: Header,
  args:{
    color:'#FFFFFF',
    backgroundColor:'#8700ff',
  },
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    color: {
      control: "color",
    },
  },
};

export default meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
