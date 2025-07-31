import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [selected, setSelected] = useState('book');

  let componentToRender;

  // Element variable conditional rendering
  if (selected === 'book') {
    componentToRender = <BookDetails />;
  } else if (selected === 'blog') {
    componentToRender = <BlogDetails />;
  } else {
    componentToRender = <CourseDetails />;
  }

  return (
    <div className="App">
      <h1>Blogger Dashboard</h1>

      {/* Navigation Buttons */}
      <div style={{ marginBottom: '20px' }}>
        <button
          className={selected === 'book' ? 'active-btn' : ''}
          onClick={() => setSelected('book')}
        >
          Show Books
        </button>

        <button
          className={selected === 'blog' ? 'active-btn' : ''}
          onClick={() => setSelected('blog')}
        >
          Show Blogs
        </button>

        <button
          className={selected === 'course' ? 'active-btn' : ''}
          onClick={() => setSelected('course')}
        >
          Show Courses
        </button>
      </div>

      {/* Render the selected component */}
      {componentToRender}

      <p>
        View Mode: {selected === 'book'
          ? 'Books'
          : selected === 'blog'
          ? 'Blogs'
          : 'Courses'}
      </p>
    </div>
  );
}

export default App;
