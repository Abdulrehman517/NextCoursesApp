import courses from "./data.json";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET(request) {
  return NextResponse.json(courses);
}
export async function POST(request) {
  const { title, link, level, description } = await request.json();
  console.log(title, link, level, description);
  const newCourse = {
    id: uuidv4(),
    title,
    link,
    level,
    description,
  };
  courses.push(newCourse);
  return NextResponse.json(courses);
}
