import IconButton from "../common/IconButton";
import HomeIcon from "../icons/HomeIcon";
import TagIcon from "../icons/TagIcon";

export const NavTabs = {
  HOME: "home",
  TAGS: "tags",
};

const Nav = ({ activeTab, setActiveTab }) => {
  const onTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center pt-[37px]">
      <div className="logo mb-[46.5px] text-[13px] font-bold">LOGO</div>
      <IconButton className="mb-[25.5px]" Icon={HomeIcon} label="Home" isActive={activeTab === NavTabs.HOME} onClick={() => onTabClick(NavTabs.HOME)} />
      <IconButton hasNotification Icon={TagIcon} label="Tags" isActive={activeTab === NavTabs.TAGS} onClick={() => onTabClick(NavTabs.TAGS)} />
    </div>
  );
};

export default Nav;
