import React from 'react';


function Home() {
  const styleSheet = {
    container: {
    
    },
    heading:{
      margin:"25%"
    }
  };

  return (
    <div style={styleSheet.container}>
    
      <h1 style={styleSheet.heading}>WElCOME TO DAILY BLOG</h1>
    </div>
  );
}

export default Home;
