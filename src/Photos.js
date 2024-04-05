import React, { useEffect, useState } from 'react';
import Card from './component/Card';
import Loading from './component/Loading';

function Photos() {
  const [photos, setPhoto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then((data) => {
        setPhoto(data.slice(0, 50));
        setLoading(false);
      })
      .catch((error) => {
        console.log("error:", error);
        setLoading(false);
      });

  }, []);

  return (
    <div className='container'>
      {loading ? (
        <Loading/>
      ) : (
        photos.map((photo) => (
          <Card key={photo.id} url={photo.url} title={photo.title} />
        ))
      )}
    </div>
  );
}

export default Photos;
