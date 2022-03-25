import { useEffect, useState } from "react";
import Tag from "./Tag";
import api from "../../api";

const Tags = () => {
  const [tags, setTags] = useState([]);

  useEffect(async () => {
    const res = await api.getTags();
    console.log("res", res.data);
    setTags(res.data);
  }, []);

  return (
    <div className="flex h-full flex-col">
      <div className="text-[30px]">Tags</div>
      <div className="mt-[24px] flex flex-wrap gap-x-[24px] gap-y-[36px] overflow-auto">
        {tags.map((tag, index) => (
          <Tag key={`${tag.id}_${index}`} tagText={tag.name} title={tag.name} desc={`${tag.count} Results`} />
        ))}
      </div>
    </div>
  );
};

export default Tags;
