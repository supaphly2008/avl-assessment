import { action } from "@storybook/addon-actions";
import ButtonRound from "../components/common/ButtonRound";

export default {
  title: "Components/Common",
  component: ButtonRound,
};

const Template = (args) => <ButtonRound {...args} />;

export const buttonRound = Template.bind({});
buttonRound.args = {
  label: "Button",
  isOutline: true,
  className: "",
  onClick: action("onClick"),
};
