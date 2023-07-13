import React from "react";
import config from "../index.json";

const Header = () => {
  const navigation = config.navigation;
  return (
    <div>
      <div>
        <ul className="flex px-4 sm:px-8 lg:px-32 gap-2 sm:gap-x-10 content-center leading-0 h-0">
          {navigation.map((item, index) => {
            const isLastItem = index === navigation.length - 1;
            const downloadLink = item.title.toLowerCase() === "download resume";
            return (
              <li
                className={`mt-6 cursor-pointer ${isLastItem ? "ml-auto" : ""}`}
                key={item.title}
              >
                <a
                  href={downloadLink ? item.url : `#${item.title}`}
                  download={downloadLink}
                  className={`text-1.85xl block text-center py-0.5 px-2 bg-white font-bold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent ${
                    downloadLink ? "border-2 border-gray-200 rounded" : ""
                  }`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
