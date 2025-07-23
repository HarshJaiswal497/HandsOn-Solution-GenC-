import React from 'react';
import Post from './Post'; // Import data model

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  
  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        const postsList = data.map(p => new Post(p.id, p.title, p.body));
        this.setState({ posts: postsList });
      })
      .catch(err => {
        console.error("Error in fetching posts:", err);
        this.setState({ hasError: true });
      });
  }

  
  componentDidMount() {
    this.loadPosts();
  }

  
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading posts.</h2>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map(post => (
          <div key={post.id} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }

 
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert("An error occurred while rendering posts.");
    console.error("componentDidCatch - Error:", error, info);
  }
}

export default Posts;
