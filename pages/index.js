import { useState } from "react";
import Search from "../components/search";
import Tags from "../components/tags";
import FollowsPanel from "../components/follows";
import Container from "../components/mobile/Container";
import Nav, { NavTabs } from "../components/nav";
import useResize from "../hooks/useResize";

const hideFollowsWidth = 1440;

export default function Home() {
  const [activeTab, setActiveTab] = useState(NavTabs.HOME);
  const width = useResize();

  const ContentComp = () => {
    if (activeTab === NavTabs.HOME) {
      return <Search />;
    }
    if (activeTab === NavTabs.TAGS) {
      return <Tags />;
    }
  };

  const MainContainer = <div className="flex-1 px-[130px] pt-[54px] pb-[87px] md:px-[70px] sm:overflow-auto sm:px-[30px] sm:pb-[30px] sm:pt-0">{ContentComp()}</div>;

  const ShowContent = () => {
    if (width >= 640) {
      return (
        <>
          <div className="w-[80px] bg-black--lighter">
            <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          {MainContainer}
        </>
      );
    } else {
      return (
        <Container activeTab={activeTab} setActiveTab={setActiveTab}>
          {MainContainer}
        </Container>
      );
    }
  };

  return (
    <div className="flex h-screen">
      {ShowContent()}
      {/* followers */}
      {width > hideFollowsWidth && (
        <div className="w-[375px] bg-black--lighter">
          <FollowsPanel />
        </div>
      )}
    </div>
  );
}
