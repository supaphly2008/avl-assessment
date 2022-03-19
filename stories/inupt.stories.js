import { action } from "@storybook/addon-actions";
import Input from "../components/common/Input";

export default {
  title: "Components/Common",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const input = Template.bind({});
input.args = {
  placeholder: "keyword",
  className: "",
  onChange: action("onChange"),
};
