import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          className="h-8"
          alt="menu"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PGEnRVFp8jXHwm-djFUQgdxdjcvt1UkQ-1AYKVXPFw&s"
        />
      </div>
      <div className="col-span-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        />
      </div>
    </div>
  );
};

export default Head;
