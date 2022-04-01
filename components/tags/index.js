import { useEffect, useState } from "react";
import Tag from "./Tag";
import TagsLoading from "../loading/TagsLoading";
import api from "../../api";

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    const res = await api.getTags();
    setTags(res.data);
    setIsLoading(false);
  }, []);

  const showTags = () => {
    if (isLoading) {
      return <TagsLoading className="mt-[24px]" count={10} />;
    } else {
      return (
        <div className="mt-[24px] grid grid-cols-tag gap-x-[24px] gap-y-[36px] overflow-auto">
          {tags.map((tag, index) => (
            <Tag key={`${tag.id}_${index}`} tagText={tag.name} title={tag.name} desc={`${tag.count} Results`} />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="text-[24px]">Tags</div>
      {showTags()}
    </div>
  );
};

export default Tags;
