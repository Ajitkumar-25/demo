import React, { useState } from "react";

import Sidebar from "./components/sidebar";
import Content from "./components/content";
import TopBar from "./components/topbar";

function App() {
  const [content, setContent] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setContent={setContent} />
      <div className="flex flex-col flex-grow">
        <TopBar />
        <div className="flex-grow p-4">
          <Content content={content} />
        </div>
      </div>
    </div>
  );
}

export default App;
