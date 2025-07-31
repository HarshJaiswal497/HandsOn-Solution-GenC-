import React from 'react';

function BlogDetails() {
  const blogs = [
    {
      id: 1,
      title: "Understanding React",
      author: "Jane Doe",
      date: "2025-07-01",
      description: "A beginner's guide to React concepts and components."
    },
    {
      id: 2,
      title: "JavaScript Tricks",
      author: "John Smith",
      date: "2025-07-20",
      description: "Useful JavaScript patterns and best practices for web development."
    }
  ];

  return (
    <div>
      <h2>Recent Blogs</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <strong>{blog.title}</strong><br />
            Author: {blog.author}<br />
            Date: {blog.date}<br />
            Description: {blog.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
