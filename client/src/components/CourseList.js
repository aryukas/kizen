import React from 'react';

function CourseList() {
  // Dummy data, replace with actual data fetching
  const courses = [
    { id: 1, title: 'Course 1' },
    { id: 2, title: 'Course 2' },
  ];

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
