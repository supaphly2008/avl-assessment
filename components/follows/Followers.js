import { useEffect, useState, useRef } from "react";
import NameCard from "../common/NameCard";
import api from "../../api";

const Followers = () => {
  const [followers, setFollowers] = useState(null);
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);

  const isInit = useRef(true);

  useEffect(async () => {
    const res = await api.getFollowers(page);
    setFollowers(res.data);
  }, []);

  useEffect(async () => {
    if (isInit.current) {
      isInit.current = false;
      return;
    }
    const res = await api.getFollowers(page);
    setFollowers((prev) => ({ ...prev, ...res.data, page: res.data.page, data: [...prev.data, ...res.data.data] }));
  }, [page]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

    if (containerRef.current) {
      if (scrollTop + clientHeight === scrollHeight) {
        // TODO: check if page === pageSize
        setPage(page + 1);
      }
    }
  };

  return (
    <div ref={containerRef} className="flex-1 overflow-auto py-[35px] px-[16px]" onScroll={handleScroll}>
      {followers?.data.map((follower, index) => (
        <NameCard key={`${index}_${follower.id}`} src={follower.avatar} name={follower.name} username={follower.username} className="mb-[21px]" />
      ))}
    </div>
  );
};

export default Followers;
