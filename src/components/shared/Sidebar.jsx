import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";

function Sidebar() {
  return (
    <div className="bg-main fixed left-0 top-0 w-28 h-full py-5">
      <ul className="pl-4">
        <li>
          <h1 className="text-2xl uppercase font-bold  text-gray-300 text-center ">
            logo
          </h1>
        </li>
        <li className="bg-[#262837]  p-4 rounded-tl-lg rounded-bl-lg">
          <a href="#" className="bg-red-400 p-4 block rounded-lg text-gray-300">
            <BiHomeAlt2 className="text-2xl  m-auto" />
          </a>
        </li>
        <li className="p-4 rounded-tl-lg rounded-bl-lg">
          <a href="#" className="p-4 block rounded-lg text-red-400">
            <BiHomeAlt2 className="text-2xl  m-auto" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
