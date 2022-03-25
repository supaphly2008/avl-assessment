import Tag from "./Tag";

const Tags = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="text-[30px]">Tags</div>
      <div className="mt-[24px] flex flex-wrap gap-x-[24px] gap-y-[36px] overflow-auto">
        <Tag tagText="Tag" title="title" desc="234 Results" />
        <Tag tagText="Tag" title="title" desc="234 Results" />
        <Tag tagText="Tag" title="title" desc="234 Results" />
        <Tag tagText="Tag" title="title" desc="234 Results" />
        <Tag tagText="Tag" title="title" desc="234 Results" />
        <Tag tagText="Tag" title="title" desc="234 Results" />
        <Tag tagText="Tag" title="title" desc="234 Results" />
        <Tag tagText="Tag" title="title" desc="234 Results" />
        <Tag tagText="Tag" title="title" desc="234 Results" />
        <Tag tagText="Tag" title="title" desc="234 Results" />
        <Tag tagText="Tag" title="title" desc="234 Results" />
        <Tag tagText="Tag" title="title" desc="234 Results" />
        <Tag tagText="Tag" title="title" desc="234 Results" />
      </div>
    </div>
  );
};

export default Tags;
