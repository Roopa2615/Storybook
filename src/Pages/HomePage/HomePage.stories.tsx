import { Meta, StoryFn } from "@storybook/react";
import HomePage from "./HomePage";

export interface HomePageProps {
  //Add additional props here
  backgroundColor?: string
}

const meta: Meta = {
  title: "Pages/HomePage",
  component: HomePage,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;

const Template: StoryFn<HomePageProps> = (args) => <HomePage {...args} />;

export const HomePageLayout = Template.bind({});

HomePageLayout.args = {
  backgroundColor: "#FFFFFF",
};
