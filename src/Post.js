import React, { useEffect, useState } from "react";
import Card from "./component/Card";
import Loading from "./component/Loading";
import "./App.css"
function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())

      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="container">
      {loading ?(
     <Loading className="loading"/>
      ):
      (posts.map((post) => (
        <Card key={post.id} title={post.title} description={post.body} />
      )))}
    </div>
  );
}
export default Post;
