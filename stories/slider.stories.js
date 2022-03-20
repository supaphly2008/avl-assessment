import Slider from "../components/common/Slider";

export default {
  title: "Components/Common",
  component: Slider,
};

const inputRange = [3, 6, 9, 12, 15, 50];

const Template = (args) => <Slider {...args} />;

export const slider = Template.bind({});
slider.args = {
  min: "0",
  max: "5",
  defaultValue: "1",
  step: "1",
  range: inputRange,
};
