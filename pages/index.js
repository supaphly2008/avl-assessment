import Search from "../components/Search";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* nav */}
      <div className="w-[80px] bg-black--lighter">Nav</div>
      {/* main */}
      <div className="flex-1 px-[130px] pt-[54px] pb-[87px]">
        <Search />
      </div>
      {/* followers */}
      <div className="w-[375px] bg-black--lighter">Followers</div>
    </div>
  );
}
