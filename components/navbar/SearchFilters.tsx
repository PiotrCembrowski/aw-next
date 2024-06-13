import Image from "next/image";
import icon from "@/app/images/search.svg";

const SearchFilters = () => {
  return (
    <div className="h-[64px] flex flex-row items-center justify-between border rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          <div className="cursor-pointer w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Where</p>
            <p className="text-sm">Wanted location</p>
          </div>
          <div className="cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Check in</p>
            <p className="text-sm">Add dates</p>
          </div>
          <div className="cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Check out</p>
            <p className="text-sm">Add dates</p>
          </div>
          <div className="cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Who</p>
            <p className="text-sm">Add quests</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="cursor-pointer p-4 bg-aw hover:bg-awDark rounded-full text-white">
          <Image src={icon} alt="search" width="15" height="15" />
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
