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
      return <TagsLoading count={10} />;
    } else {
      return tags.map((tag, index) => <Tag key={`${tag.id}_${index}`} tagText={tag.name} title={tag.name} desc={`${tag.count} Results`} />);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="text-[24px]">Tags</div>
      <div className="mt-[24px] flex flex-wrap gap-x-[24px] gap-y-[36px] overflow-auto">{showTags()}</div>
    </div>
  );
};

export default Tags;
