"use client";

import {
  Calendar,
  MirroringScreen,
  Element3,
  EmojiHappy,
  I3Dcube,
  MoneySend,
  Star,
  Watch,
  User,
} from "iconsax-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-60 shrink-0 h-screen sticky top-0 overflow-hidden">
      <div className="w-full h-full bg-white border-r">
        {/* logo */}
        <div className="p-4 md:p-6 flex cursor-pointer group items-center gap-2">
          <div className="h-10 outline outline-violet-300 w-10 flex items-center bg-gradient-to-br justify-center rounded-full from-violet-500 to-violet-400 text-white">
            <User
              size={24}
              className="relative group-hover:scale-75 duration-200"
            />
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-800">Hello User</h1>
          </div>
        </div>

        {/* section divider */}
        <hr className="bg-gray-400 mx-2" />

        {/* other section */}
        <div className="flex flex-col h-full justify-between">
          {/* top */}
          <div className="pt-6 text-gray-500 font-medium space-y-2 md:px-2 text-xs">
            <Link
              href={"/"}
              className={`flex ${
                pathname === "/" ? "text-primary" : ""
              } hover:px-8 duration-200 rounded-md w-full py-2 px-6 items-center gap-2`}
            >
              <Element3 variant="Outline" size={16} />
              Discussion Forum
            </Link>

            <button
              className={`flex hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <MoneySend size={16} />
              Market Stories
            </button>

            <button
              className={`flex  hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <EmojiHappy size={16} />
              Sentiment
            </button>

            <button
              className={`flex  hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <Calendar size={16} />
              Market
            </button>

            <button
              className={`flex  hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <I3Dcube size={16} />
              Sector
            </button>

            <button
              className={`flex  hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <Watch size={16} />
              Watchlist
            </button>

            <button
              className={`flex hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <Star size={16} />
              Events
            </button>

            <button
              className={`flex hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <MirroringScreen size={16} />
              News/Interview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
