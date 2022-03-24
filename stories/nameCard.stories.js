import { action } from "@storybook/addon-actions";
import NameCard from "../components/common/NameCard";

export default {
  title: "Components/Common",
  component: NameCard,
};

const Template = (args) => <NameCard {...args} />;

export const nameCard = Template.bind({});
nameCard.args = {
  isOutline: true,
  buttonText: "Follow",
  src: "https://picsum.photos/200",
  alt: "image",
  name: "John",
  username: "@John123",
  onClick: action("onClick"),
};
