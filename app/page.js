"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import Courses from "./components/Courses";
import LoadingPage from "./loading";
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <h1>Welcome to Next JS</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </div>
  );
};

export default HomePage;
