import { action } from "@storybook/addon-actions";
import IconButton from "../components/common/IconButton";
import HomeIcon from "../components/icons/HomeIcon";

export default {
  title: "Components/Common",
  component: IconButton,
};

const Template = (args) => <IconButton {...args} />;

export const iconButton = Template.bind({});
iconButton.args = {
  isActive: true,
  Icon: HomeIcon,
  onClick: action("onClick"),
  label: "Home",
};
