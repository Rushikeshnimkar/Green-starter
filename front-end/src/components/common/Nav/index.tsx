import React, { FC, useState } from "react";
import { SiWebmoney } from "react-icons/si";
import Button from "@/components/common/Button";
import { ConnectWallet, lightTheme } from "@thirdweb-dev/react";
import { ColorPicker } from "antd";

const Nav = ({}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navLinks = [
    {
      title: "Launch",
      subItems: [
        { title: "Create Proposal", path: "/launch/create-proposal" },
        { title: "Convert Proposal", path: "/launch/convert-proposal" },
      ],
    },
    {
      title: "Explore",
      subItems: [
        { title: "Ongoing Proposals", path: "/explore/ongoing-proposals" },
        {
          title: "Crowdfunding Events",
          path: "/explore/crowdfunding-events",
        },
      ],
    },
    {
      title: "Dashboard",
      subItems: [
        {
          title: "Crowdfunding Events",
          path: "/dashboard/crowdfunding-events",
        },
        { title: "Started Events", path: "/dashboard/started-events" },
      ],
    },
    {
      title: "Community",
      path: "/dashboard/community",
    },
  ];

  const handleCommunityClick = () => {
    window.location.href = "/community";
  };

  return (
    <div className="px-6 py-4  flex justify-between items-center  bg-white  ">
      <div className="flex gap-2 items-center ">
        <div className="text-2xl text-[#263A05]">
           <SiWebmoney /> 
        </div>
        <div className="text-2xl text-[]  font-semibold">
          <a href="/">Green Starter</a>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        {navLinks.map((navItem) => (
          <div
            key={navItem.title}
            className="relative cursor-pointer"
            onMouseEnter={() => setActiveDropdown(navItem.title)}
            onMouseLeave={() => setActiveDropdown(null)}
            onClick={
              navItem.title === "Community"
                ? handleCommunityClick
                : () => {} // Empty function if not Community
            }
          >
            {navItem.subItems ? (
              <div>
                {navItem.title}
                {navItem.subItems && (
                  <div
                    className={`absolute left-0 w-48 py-2 px-2 bg-white rounded-md shadow-xl ${
                      activeDropdown === navItem.title ? "block" : "hidden"
                    }`}
                  >
                    {navItem.subItems.map((subItem) => (
                      <a
                        key={subItem.title}
                        href={subItem.path}
                        className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-500 rounded-md"
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div>{navItem.title}</div>
            )}
          </div>
        ))}
        <ConnectWallet
          theme={lightTheme({
            colors: { primaryButtonBg: "#263A05" },
          })}
          switchToActiveChain={true}
          modalSize={"wide"}
          welcomeScreen={{ title: "TokenFest" }}
        />
      </div>
    </div>
  );
};

export default Nav;
