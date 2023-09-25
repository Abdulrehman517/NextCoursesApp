import Link from "next/link"

// async function fetchCourses(){
//     const response = await fetch("http://localhost:3000/api/courses");
//     const courses = response.json()
//     return courses;
// }


 const Courses =  ({courses}) => {

  return (
    <div className="courses">
        
        {
          courses.length === 0 ? "No courses found" : courses.map(course=>(
            <div key={course.id} className="card">
                <h2>{course.title}</h2>
                <small>Level:{course.level}</small>
                <p>{course.description}</p>
                <Link href={course.link} className="btn" target="_blank">Go to Course</Link>
            </div>
        ))
        }
    </div>
  )
}
 
export default Courses