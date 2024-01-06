"use client";
import useSidebarStore from "@/hooks/use-sidebar";

function Sidebar() {
  const { isSidebarVisible, toggleSidebar } = useSidebarStore();

  return (
    <div
      className={`bg-gray-800 text-white w-64 flex-shrink-0 transform transition-transform ${
        isSidebarVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Add your sidebar content here */}
      <ul>
        <li className="py-2">Item 1</li>
        <li className="py-2">Item 2</li>
        <li className="py-2">Item 3</li>
      </ul>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
    </div>
  );
}

export default Sidebar;
