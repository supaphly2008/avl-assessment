import FollowsLoading from "../components/loading/FollowsLoading";

export default {
  title: "Components/Common/Loading",
  component: FollowsLoading,
};

const Template = (args) => <FollowsLoading {...args} />;

export const followsLoading = Template.bind({});
followsLoading.args = {
  className: "",
  count: 3,
};
