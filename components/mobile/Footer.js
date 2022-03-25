import IconButton from "../common/IconButton";
import HomeIcon from "../icons/HomeIcon";
import TagIcon from "../icons/TagIcon";
import { NavTabs } from "../nav";

const Footer = ({ activeTab }) => {
  return (
    <div className="flex h-[66px] items-center justify-center bg-black--lighter">
      <IconButton className="mr-[56px]" Icon={HomeIcon} isActive={activeTab === NavTabs.HOME} label="Home" />
      <IconButton Icon={TagIcon} isActive={activeTab === NavTabs.TAGS} label="Tags" />
    </div>
  );
};

export default Footer;
