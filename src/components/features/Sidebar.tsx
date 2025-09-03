import { useEffect } from "react";
import SidebarItem from "../ui/SidebarLink";
import { RiDashboard2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function Sidebar({
  sidebarSize,
  setSidebarSize,
  isHalfScreen,
  isSmallScreen,
  isOpen,
  setIsOpen,
  sidebarItems,
}) {
  useEffect(() => {
    if (isSmallScreen) {
      setSidebarSize("small");
    }
  }, [isSmallScreen, setSidebarSize]);

  const isOverlay = isSmallScreen;

  return (
    <div
      className={`fixed top-0 right-0 z-[200] h-full text-white bg-secondary-100 shadow-xl
        transition-transform duration-300 ease-in-out
        ${
          isOverlay
            ? "w-[280px]"
            : sidebarSize === "big"
            ? "w-sidebar"
            : "w-sidebar-small"
        }
        ${
          isOverlay
            ? isOpen
              ? "translate-x-0"
              : "translate-x-full"
            : "translate-x-0"
        }
        flex flex-col
      `}
    >
      {isOverlay && (
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 left-4 hover:bg-white/10 p-1 rounded-lg text-white text-2xl z-[101]"
        >
          <IoClose />
        </button>
      )}

      <h1 className="text-white font-semibold text-2xl tracking-wide px-5 mt-6">
        {sidebarSize === "big" || isSmallScreen ? (
          "إدارة المعصرة"
        ) : (
          <RiDashboard2Fill className="w-6 h-6 mx-auto" />
        )}
      </h1>

      <div
        className={`flex flex-col overflow-y-auto overflow-x-hidden pb-20 hide-scrollbar ${
          isHalfScreen ? "mt-sidebar-small" : ""
        }`}
      >
        {sidebarSize === "big" && (
          <h2 className="text-gray-400 uppercase text-sm font-semibold tracking-widest px-5 mt-4 mb-3">
            التنقل
          </h2>
        )}

        <ul
          className={`flex flex-col gap-2 ${
            sidebarSize === "small" ? "mt-5" : ""
          }`}
        >
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              mainData={
                item.type === "dropdown"
                  ? { Icon: item.Icon, label: item.label }
                  : null
              }
              type={item.type as "link" | "dropdown"}
              data={item.data}
              sidebarSize={isSmallScreen ? "big" : sidebarSize}
            />
          ))}
        </ul>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black-400 to-transparent pointer-events-none" />
    </div>
  );
}
