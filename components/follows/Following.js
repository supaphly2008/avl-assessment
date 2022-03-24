import { useEffect, useState, useRef } from "react";
import NameCard from "../common/NameCard";
import api from "../../api";

const Following = () => {
  const [following, setFollowing] = useState(null);
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);

  const isInit = useRef(true);

  useEffect(async () => {
    const res = await api.getFollowing(page);
    setFollowing(res.data);
  }, []);

  useEffect(async () => {
    if (isInit.current) {
      isInit.current = false;
      return;
    }
    const res = await api.getFollowing(page);
    setFollowing((prev) => ({ ...prev, ...res.data, page: res.data.page, data: [...prev.data, ...res.data.data] }));
  }, [page]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const isEnd = scrollTop + clientHeight === scrollHeight;
    const hasMore = following.page !== following.totalPages;
    if (containerRef.current) {
      if (isEnd && hasMore) {
        setPage(page + 1);
      }
    }
  };

  return (
    <div ref={containerRef} className="flex-1 overflow-auto py-[35px] px-[16px]" onScroll={handleScroll}>
      {following?.data.map((follow, index) => (
        <NameCard key={`${index}_${follow.id}`} isOutline={false} buttonText="Following" src={follow.avatar} alt={follow.name} name={follow.name} username={follow.username} className="mb-[21px]" />
      ))}
    </div>
  );
};

export default Following;
