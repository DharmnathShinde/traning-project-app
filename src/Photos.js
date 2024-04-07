import React, { useEffect, useState } from "react";
import Card from "./component/Card";
import Loading from "./component/Loading";

function Photos() {
  const [photos, setPhoto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
     const fetchData = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/photos");
      let data = await response.json();
      setPhoto(data.slice(0, 50)); // Assuming setPhoto is a state setter function from useState
      setLoading(false); // Assuming setLoading is a state setter function from useState
      console.log(data);
    } catch (error) {
      console.log("error:", error);
      setLoading(false);
    }
  };

  

    // fetch("https://jsonplaceholder.typicode.com/photos")
    //   .then(response => response.json())
    //   .then((data) => {
    //     setPhoto(data.slice(0, 50));
    //     setLoading(false);
    //     })
    //     .catch((error) => {
    //       console.log("error:", error);
    //       setLoading(false);
    //     });
    fetchData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        photos.map((photo) => (
          <Card key={photo.id} url={photo.url} title={photo.title} />
        ))
      )}
    </div>
  );
}

export default Photos;
