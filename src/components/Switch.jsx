import { useState } from "react";

function Tabs({ title, tabs, onTabChange }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const activeTab = (tab, index) => {
    setTimeout(() => {
      setSelectedTab(index);
    }, 50);
    onTabChange(tab, index);
  };

  return (
    <div className="w-full sm:w-auto">
      <h1 className="text-2xl my-5 font-semibold">{title}</h1>
      <div className="h-full  rounded-md p-1 ">
        <div className="relative  flex justify-end gap-2 items-center">
          {tabs?.map((tab, index) => (
            <span
              key={tab}
              className={`${
                selectedTab === index ? "bg-red-600 text-white" : ""
              }  relative flex h-full w-32 cursor-pointer items-center justify-center rounded-md font-semibold p-2  transition duration-200 ease-in-out text-sm`}
              onClick={() => activeTab(tab, index)}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
