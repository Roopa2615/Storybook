// src/components/TextInput.stories.tsx
import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import TextInput, { TextInputProps } from "./TextInput";

export default {
  title: "Atoms/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  args: {
    placeholder: "Type here...",
  },
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["text", "password", "email", "number"],
    },
    variant: {
      control: { type: "radio" },
      options: ["outlined", "filled", "standard"],
    },
    onChange: { action: "changed" },
  },
} as Meta;

const Template: StoryFn<TextInputProps> = (args) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    args.onChange(event);
  };

  return <TextInput {...args} value={value} onChange={handleChange} />;
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Text Input",
  type: "text",
  variant: "outlined",
};

export const Filled = Template.bind({});
Filled.args = {
  label: "Text Input",
  type: "text",
  variant: "filled",
};

export const Standard = Template.bind({});
Standard.args = {
  label: "Text Input",
  type: "text",
  variant: "standard",
};

export const Text = Template.bind({});
Text.args = {
  label: "Text Input",
  type: "text",
  variant: "outlined",
};

export const Password = Template.bind({});
Password.args = {
  label: "Password Input",
  type: "password",
  variant: "outlined",
};

export const Email = Template.bind({});
Email.args = {
  label: "Email Input",
  type: "email",
  variant: "outlined",
};

export const Number = Template.bind({});
Number.args = {
  label: "Number Input",
  type: "number",
  variant: "outlined",
};
