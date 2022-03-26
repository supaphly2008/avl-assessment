import IconButton from "../common/IconButton";
import HomeIcon from "../icons/HomeIcon";
import TagIcon from "../icons/TagIcon";
import { NavTabs } from "../nav";

const Footer = ({ activeTab, setActiveTab }) => {
  const onTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-[66px] items-center justify-center bg-black--lighter">
      <IconButton className="mr-[56px]" Icon={HomeIcon} isActive={activeTab === NavTabs.HOME} label="Home" onClick={() => onTabClick(NavTabs.HOME)} />
      <IconButton Icon={TagIcon} isActive={activeTab === NavTabs.TAGS} label="Tags" onClick={() => onTabClick(NavTabs.TAGS)} />
    </div>
  );
};

export default Footer;
