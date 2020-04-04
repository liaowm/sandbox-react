import React from "react";
import "./styles.css";
import MyNav from "./MyNav";

export default function App() {
  const nav1 = ["首页", "视频", "学习"];
  const nav2 = ["WEB", "Java", "React"];

  return (
    <div className="App">
      <h1>Hello Liaowm</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MyNav nav={nav1} />
      <MyNav nav={nav2} />
    </div>
  );
}
