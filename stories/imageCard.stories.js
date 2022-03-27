import ImageCard from "../components/common/ImageCard";

export default {
  title: "Components/Common",
  component: ImageCard,
};

const Template = (args) => <ImageCard {...args} />;

export const imageCard = Template.bind({});
imageCard.args = {
  title: "Title",
  username: "Username",
  src: "https://picsum.photos/200",
  alt: "image",
};
