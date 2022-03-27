import { useEffect, useState, useRef } from "react";
import NameCard from "../common/NameCard";
import FollowsLoading from "../loading/FollowsLoading";
import api from "../../api";

const Following = () => {
  const [following, setFollowing] = useState(null);
  const [isInitLoading, setIsInitLoading] = useState(false);
  const [hasMoreLoading, setHasMoreLoading] = useState(false);
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);

  const isInit = useRef(true);

  useEffect(async () => {
    setIsInitLoading(true);
    const res = await api.getFollowing(page);
    setFollowing(res.data);
    setIsInitLoading(false);
  }, []);

  useEffect(async () => {
    if (isInit.current) {
      isInit.current = false;
      return;
    }
    setHasMoreLoading(true);
    const res = await api.getFollowing(page);
    setFollowing((prev) => ({ ...prev, ...res.data, page: res.data.page, data: [...prev.data, ...res.data.data] }));
    setHasMoreLoading(false);
  }, [page]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const isEnd = scrollTop + clientHeight === scrollHeight;
    const hasMore = following.page !== following.totalPages;
    if (containerRef.current) {
      if (isEnd && hasMore && !hasMoreLoading) {
        setPage(page + 1);
      }
    }
  };

  const showFollowing = () => {
    return following?.data.map((follow, index) => <NameCard key={`${index}_${follow.id}`} isOutline={false} buttonText="Following" src={follow.avatar} alt={follow.name} name={follow.name} username={follow.username} className="mb-[21px]" />);
  };

  return (
    <div ref={containerRef} className="flex-1 overflow-auto py-[35px] px-[16px]" onScroll={handleScroll}>
      {isInitLoading ? <FollowsLoading count={4} /> : showFollowing()}
      {hasMoreLoading && <FollowsLoading count={5} />} {}
    </div>
  );
};

export default Following;
