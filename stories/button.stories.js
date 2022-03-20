import { action } from "@storybook/addon-actions";
import Button from "../components/common/Button";

export default {
  title: "Components/Common",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  label: "Button",
  isUppercase: false,
  className: "",
  onClick: action("onClick"),
};
