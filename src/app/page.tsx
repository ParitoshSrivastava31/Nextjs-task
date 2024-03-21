"use client";

import React, { useState } from "react";
import Stories from "@/components/Cards/Stories";
import Comments from "@/components/Cards/Comments";
import Sidebar from "@/components/Sidebar";
import { TagRight } from "iconsax-react";
import Navbar from "@/components/Navbar";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showComments, setShowComments] = useState(true);
  const [showStories, setShowStories] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleSidebarChange = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDiscussionClick = () => {
    setShowComments(true);
    setShowStories(false);
  };

  const handleMarketStoriesClick = () => {
    setShowComments(false);
    setShowStories(true);
  };

  return (
    <div className={`${isSidebarOpen ? "overflow-hidden" : ""} h-screen`}>
      {/* backdrop */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="bg-black/60 absolute top-0 left-0 md:hidden w-full h-screen z-20"
        />
      )}

      {/* mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="absolute md:hidden z-30 top-0 left-0"
          style={{ transform: `translateX(${isSidebarOpen ? 0 : "-100%"})` }}
        >
          <Sidebar />
        </div>
      )}

      <div className="flex">
        <div>
          <button onClick={toggleSidebar}>
            <TagRight size={25} variant="Bold" color="#ba68c8" />
          </button>
          {sidebarVisible && (
            <div className="hidden md:block">
              <Sidebar />
            </div>
          )}
        </div>

        <div className="w-full max-w-[1440px] mx-auto">
          <Navbar
            handleDiscussionClick={handleDiscussionClick}
            handleMarketStoriesClick={handleMarketStoriesClick}
          />
          <div className="p-4 md:p-6 space-y-8 grid grid-cols-3">
            <div className="md:hidden col-span-1 fixed top-1/2 transform -translate-y-1/2">
              <div className="absolute left-0" style={{ left: "-43px" }}>
                <button
                  onClick={handleSidebarChange}
                  className="all-center text-gray-500 h-8 w-8"
                >
                  <TagRight size={25} variant="Bold" color="#ba68c8" />
                </button>
              </div>
            </div>

            <div
              className={`break-inside-avoid-column space-y-4 col-span-3 lg:col-span-2 ${
                showComments ? "" : "hidden"
              }`}
            >
              <Comments />
            </div>

            <div
              className={`break-inside-avoid-column space-y-4 md:block lg:col-span-1 ${
                showStories ? "" : "hidden"
              }`}
              style={{ marginLeft: "30px", minWidth: "400px" }}
            >
              <Stories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
