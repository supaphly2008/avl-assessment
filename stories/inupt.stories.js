import { action } from "@storybook/addon-actions";
import Input from "../components/common/Input";
import { useState } from "react";

export default {
  title: "Components/Common",
  component: Input,
};

const Template = (args) => {
  const [value, setValue] = useState("");
  return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const input = Template.bind({});
input.args = {
  placeholder: "keyword",
  className: "",
};
