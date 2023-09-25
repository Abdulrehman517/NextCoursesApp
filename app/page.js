import Link from "next/link";
import React from "react";
import Courses from "./components/Courses";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Next JS</h1>
      <Courses />
    </div>
  );
};

export default HomePage;
