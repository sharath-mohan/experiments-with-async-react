import React, { Activity, useRef, useState } from "react";

function ActivityComponent() {
  const [showPanel, setShowPanel] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <div>
        <button
          className="text-white py-2 px-3 rounded bg-blue-700"
          onClick={() => setShowPanel(true)}
        >
          Show Slider
        </button>
        <Activity mode={showPanel ? "visible" : "hidden"}>
          <div className=" p-3 bg-gray-500 min-h-screen w-[400px] absolute top-0 left-0 bottom-0 ">
            <button
              className="text-white py-2 px-3 rounded bg-blue-700"
              onClick={() => setShowPanel(false)}
            >
              close
            </button>
            <input
              ref={inputRef}
              className="bg-white rounded px-3 py-2 block"
            />
          </div>
        </Activity>
      </div>
    </>
  );
}

export default ActivityComponent;
