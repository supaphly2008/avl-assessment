import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

export default {
  title: "Components/Common",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  label: "Button",
  isWhite: false,
  isSmall: false,
  onClick: action("onClick"),
};
