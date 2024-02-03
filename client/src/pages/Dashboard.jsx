import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DashProfile from "../Components/DashProfile";
import DashSidebar from "../Components/DashSidebar";
export default function Dashboard() {
  const location = useLocation("");
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get("tab");
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
    console.log(tabFormUrl);
  }, [location.search]);
  return (
    <div>
      <div className="">
        <DashSidebar />
      </div>
      {tab === "profile" && <DashProfile />}
    </div>
  );
}
