import { Meta, StoryFn } from "@storybook/react";
import SearchBar from "./searchBar";
import { ReactNode, useState } from "react";

export interface SearchBarProps {
  placeholder?: string;
  value?: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "number";
  buttonVariant?: "primary" | "secondary";
  onClick: (newValue?: string | number | string[]) => void;
  InputVariant?: "outlined" | "filled" | "standard";
  label?: string;
  inputWidth?: string;
  children:ReactNode;
  width?:string;
}

const meta: Meta = {
  title: "Molecules/SearchBar",
  component: SearchBar,
  args: {
    placeholder: "Search...",
    type: "string",
    children: "Search",
    label: "Search",
    inputWidth: "100%",
    startIcon: "search",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["text", "number"],
    },
    buttonVariant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
    onChange: { action: "changed" },
    onClick: { action: "clicked" },
  },
};

export default meta;

const Template: StoryFn<SearchBarProps> = (args) => {
  const [searchedValue, setSearchValue] = useState("");
  const [newValue, setNewValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    args.onChange(event);
  };

  const handleClick = () => {
    if (searchedValue) {
      setNewValue(searchedValue);
      setSearchValue("");
      if (args.onClick && newValue) {
        args.onClick(newValue);
      }
    }
  };

  return (
    <SearchBar
      {...args}
      value={searchedValue}
      onChange={(event) => handleChange(event)}
      onClick={handleClick}
    />
  );
};

export const Default = Template.bind({});

export const NumberSearchBar = Template.bind({});

NumberSearchBar.args = {
  placeholder: "Search here...",
  type: "number",
  children: "Search",
  label: "Search Number",
  inputWidth: "100%",
};
