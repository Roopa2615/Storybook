import React, { ReactNode } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Footer from "./Footer";

export interface FooterProps {
  children?: ReactNode;
  backgroundColor?: string;
}

const meta: Meta = {
  title: "Organisms/Footer",
  component: Footer,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;

const Template: StoryFn<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
  backgroundColor: "Grey",
};
