import { Meta, StoryFn } from "@storybook/react";
import HomeComponent from "./Home";

export interface HomeComponentProps {
  //Add additional props here
  backgroundColor?: string
}

const meta: Meta = {
  title: "Templates/HomeComponent",
  component: HomeComponent,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;

const Template: StoryFn<HomeComponentProps> = (args) => <HomeComponent {...args} />;

export const HomePageTemplate = Template.bind({});

HomePageTemplate.args = {
  backgroundColor: "#FFFFFF",
};
