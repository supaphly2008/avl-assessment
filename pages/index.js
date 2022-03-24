import { useState } from "react";
import Search from "../components/search";
import Tags from "../components/tags";
import FollowsPanel from "../components/follows";
import Nav, { NavTabs } from "../components/nav";

export default function Home() {
  const [activeTab, setActiveTab] = useState(NavTabs.HOME);

  const contentComp = () => {
    if (activeTab === NavTabs.HOME) {
      return <Search />;
    }
    if (activeTab === NavTabs.TAGS) {
      return <Tags />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* nav */}
      <div className="w-[80px] bg-black--lighter">
        <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {/* main */}
      <div className="flex-1 px-[130px] pt-[54px] pb-[87px]">{contentComp()}</div>
      {/* followers */}
      <div className="w-[375px] bg-black--lighter">
        <FollowsPanel />
      </div>
    </div>
  );
}
