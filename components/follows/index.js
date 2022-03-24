import { useState } from "react";
import Followers from "./Followers";
import Following from "./Following";

const TabName = {
  followers: "followers",
  following: "following",
};

export const CompState = {
  followers: "followers",
  following: "following",
};

const FollowsPanel = () => {
  const [tab, setTab] = useState(TabName.followers); // active tab
  const [component, setComponent] = useState(CompState.followers); // active component

  const onTabClick = (tabName) => {
    setTab(tabName);
    setComponentState(tabName);
  };

  const setComponentState = (state) => {
    if (state === CompState.followers) {
      setComponent(CompState.followers);
    }
    if (state === CompState.following) {
      setComponent(CompState.following);
    }
  };

  const Comp = () => {
    if (component === CompState.followers) {
      return <Followers />;
    }
    if (component === CompState.following) {
      return <Following />;
    }
  };

  const baseClass = "w-1/2 cursor-pointer pt-[32px] pb-[13px]";
  const activeClass = "border-b-2 border-b-white";

  return (
    <div className="flex h-full flex-col ">
      {/* Tab */}
      <ul className="flex text-center">
        <li className={`${baseClass} ${tab === TabName.followers ? activeClass : "text-[#8d8d8d]"}`} onClick={() => onTabClick(TabName.followers)}>
          Followers
        </li>
        <li className={`${baseClass} ${tab === TabName.following ? activeClass : "text-[#8d8d8d]"}`} onClick={() => onTabClick(TabName.following)}>
          Following
        </li>
      </ul>
      {/* content */}
      {Comp()}
    </div>
  );
};

export default FollowsPanel;
