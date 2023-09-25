import { NextRequest, NextResponse } from "next/server";

import courses from "../data.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const fileteredCourses = courses.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(fileteredCourses);
}
