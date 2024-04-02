import React from "react";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg col-span-1">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Live</li>
        <li>Courses</li>
        <li>Fashion</li>
        <li>Beauty</li>
      </ul>
    </div>
  );
};

export default Sidebar;
