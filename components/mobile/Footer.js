import IconButton from "../common/IconButton";
import HomeIcon from "../icons/HomeIcon";
import TagIcon from "../icons/TagIcon";

const Footer = () => {
  return (
    <div className="flex h-[66px] items-center justify-center bg-black--lighter">
      <IconButton className="mr-[56px]" Icon={HomeIcon} label="Home" />
      <IconButton Icon={TagIcon} label="Tags" />
    </div>
  );
};

export default Footer;
