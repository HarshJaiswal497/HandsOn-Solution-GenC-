import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 1, name: "React Basics", duration: "4 Weeks", price: "₹2,999" },
    { id: 2, name: "Fullstack JS", duration: "8 Weeks", price: "₹5,999" }
  ];

  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <strong>{course.name}</strong><br />
            Duration: {course.duration}<br />
            Price: {course.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
