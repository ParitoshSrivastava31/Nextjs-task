import React from "react";

interface NavbarProps {
  handleDiscussionClick: () => void;
  handleMarketStoriesClick: () => void;
}

function Navbar({
  handleDiscussionClick,
  handleMarketStoriesClick,
}: NavbarProps) {
  return (
    <div>
      <div
        className="flex justify-between items-center"
        style={{ marginLeft: "10%", marginRight: "10%", paddingTop: "30px" }}
      >
        <button
          onClick={handleDiscussionClick}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Discussion Forum
          </span>
        </button>
        <button
          onClick={handleMarketStoriesClick}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Market Stories
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
