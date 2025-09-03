"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function SidebarItem({
  mainData,
  type,
  data,
  sidebarSize,
}) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const isDropdownLinkActive = (links) => {
    return links.some((link) => pathname === link.href);
  };

  const isCurrentLink = (href) => pathname === href;

  const isActive = (href) => pathname === href;

  // ✅ حالة اللينك العادي
  if (type === "link" && !Array.isArray(data)) {
    const { href, icon: ItemIcon, label: itemLabel } = data;

    return (
      <li className="group transition-all duration-500 px-2">
        <Link
          to={href}
          className={`flex items-center text-white gap-1 px-5 rounded-lg w-[90%] mx-auto transition-all duration-300
            ${
              sidebarSize === "small"
                ? "flex-col justify-center py-3"
                : "flex-row gap-3 py-4"
            }
            ${
              isActive(href)
                ? "bg-secondary-200/70 hover:bg-secondary-200"
                : "hover:bg-secondary-200 hover:text-white"
            }
          `}
        >
          <ItemIcon className="text-xl" />
          <span
            className={`text-xs font-medium text-center ${
              sidebarSize === "small" ? "block text-[10px]" : "hidden"
            }`}
          >
            {itemLabel}
          </span>
          {sidebarSize === "big" && (
            <span className="font-semibold">{itemLabel}</span>
          )}
        </Link>
      </li>
    );
  }

  // ✅ حالة الـ Dropdown
  return (
    <li className="group transition-all duration-500 px-2">
      <button
        onClick={() => setOpenDropdown(!openDropdown)}
        className={`flex items-center text-white justify-center gap-1 px-5 w-[90%] mx-auto rounded-lg
          ${sidebarSize === "small" ? "flex-col py-3" : "flex-row gap-3 py-4"}
          ${
            openDropdown || (Array.isArray(data) && isDropdownLinkActive(data))
              ? "bg-sidebar-button-color/90 hover:bg-[#ffffffaa] text-white"
              : "hover:bg-secondary-200 text-white"
          }
        `}
      >
        <mainData.Icon className="text-xl" />
        <span
          className={`${
            sidebarSize === "small"
              ? "text-[10px] font-medium text-center mt-1"
              : "text-sm font-semibold "
          }`}
        >
          {mainData.label}
        </span>
        {sidebarSize === "big" && (
          <MdOutlineArrowBackIos
            className={`mr-auto text-sm text-white transition-transform duration-300 ${
              openDropdown ? "-rotate-90" : ""
            }`}
          />
        )}
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          openDropdown
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul
          className={`mt-1 space-y-1 ${sidebarSize === "small" ? "" : "pr-6"}`}
        >
          {Array.isArray(data) &&
            data.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-3 py-3 rounded-md transition-all duration-300
                    ${
                      sidebarSize === "small"
                        ? "flex-col justify-center items-center text-center"
                        : "flex-row justify-start"
                    }
                    ${
                      isCurrentLink(link.href)
                        ? "bg-secondary-200/70 hover:bg-secondary-200 text-white"
                        : "text-white hover:bg-secondary-200 hover:text-white"
                    }
                  `}
                >
                  <div className="relative flex flex-col items-center">
                    {sidebarSize === "small" && (
                      <span className="w-1 h-1 bg-gray-400 rounded-full mb-1" />
                    )}
                    <link.icon className="text-base" />
                  </div>
                  <span
                    className={`${
                      sidebarSize === "small"
                        ? "text-[10px] font-medium mt-1"
                        : "text-sm font-medium"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
}
