import React, { useEffect, useState } from 'react'
import Head from './component/Head'
import { json } from 'react-router-dom'

function Photos() {
  const[photos,setPhoto]=useState([])

  useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/photos")
  .then(response=>response.json())
  .then((data) => {
    setPhoto(data.slice(0,50));
  })
  .catch((error)=>console.log("error:",error))

  },[])

  const getBackground= (index) => {
    const colors = ['#f8d7da', '#d1ecf1', '#d4edda'];
    return colors[index % colors.length]; 
  };


  
  const styles = {
  
    post: (index) => ({
      backgroundColor: getBackground(index)
    }),
    postTitle: {
      fontSize: '24px',
      fontWeight:"200",
      color: '#333',
    },
    photo:{
      width:"100%",
      aspectRatio:"3/2"
    }
  
  };

  return (
    <div>
      <Head />
      <div className='container'>
        {photos.map((image,index) => (
          <div
            key={image.id}
            style={styles.post(index)}
          >
             <img style={styles.photo} src={image.url} alt="" />
        
            <h1 className='postTitle'><strong>Title: </strong>{image.title}</h1>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Photos
