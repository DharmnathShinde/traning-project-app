import React, { useEffect, useState } from "react";
import Head from "./component/Head";
import Footer from "./component/Footer";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
      
  }, []);

  const getBackground= (index) => {
    const colors = ['#f8d7da', '#d1ecf1', '#d4edda'];
    return colors[index % colors.length]; 
  };

  const styles = {
  
    post: (index) => ({
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '10px',
      backgroundColor: getBackground(index)
    }),
    postBody: {
      fontSize: '16px',
      color: '#666',
    },
  };

  return (
    <div>
      <Head />
      <div className="container">
        {posts.map((post, index) => (
          <div
            key={post.id}
            style={styles.post(index)}
          >
            <h1 className="postTitle"><strong>Title: </strong>{post.title}</h1>
            <p style={styles.postBody}>{post.body}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Post;
