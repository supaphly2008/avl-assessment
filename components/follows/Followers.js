import { useEffect, useState, useRef } from "react";
import NameCard from "../common/NameCard";
import FollowsLoading from "../loading/FollowsLoading";
import api from "../../api";

const Followers = () => {
  const [followers, setFollowers] = useState(null);
  const [isInitLoading, setIsInitLoading] = useState(false);
  const [hasMoreLoading, setHasMoreLoading] = useState(false);
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);

  const isInit = useRef(true);

  useEffect(async () => {
    setIsInitLoading(true);
    const res = await api.getFollowers(page);
    setFollowers(res.data);
    setIsInitLoading(false);
  }, []);

  useEffect(async () => {
    if (isInit.current) {
      isInit.current = false;
      return;
    }
    setHasMoreLoading(true);
    const res = await api.getFollowers(page);
    setFollowers((prev) => ({ ...prev, ...res.data, page: res.data.page, data: [...prev.data, ...res.data.data] }));
    setHasMoreLoading(false);
  }, [page]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const isEnd = scrollTop + clientHeight === scrollHeight;
    const hasMore = followers.page !== followers.totalPages;
    if (containerRef.current) {
      if (isEnd && hasMore && !hasMoreLoading) {
        setPage(page + 1);
      }
    }
  };

  const showOutline = (follower) => {
    return !follower.isFollowing;
  };

  const showButtonText = (follower) => {
    return follower.isFollowing ? "Following" : "Follow";
  };

  const showFollowers = () => {
    return followers?.data.map((follower, index) => <NameCard key={`${index}_${follower.id}`} isOutline={showOutline(follower)} buttonText={showButtonText(follower)} src={follower.avatar} alt={follower.name} name={follower.name} username={follower.username} className="mb-[21px]" />);
  };

  return (
    <div ref={containerRef} className="flex-1 overflow-auto py-[35px] px-[16px]" onScroll={handleScroll}>
      {isInitLoading ? <FollowsLoading count={4} /> : showFollowers()}
      {hasMoreLoading && <FollowsLoading count={5} />}
    </div>
  );
};

export default Followers;
