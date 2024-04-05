import React, { useEffect, useState } from 'react';
import Head from './component/Head';
import Card from './component/Card';
import Loading from './component/Loading';

function Contact() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {setUser(data);
        setLoading(false);
      })
      .catch((error) => console.log("Error:", error));
      setLoading(false);
    }, []);
  return (
      <div className="container">
          {loading ? (
        <Loading/>
      ) : (
        users.map((user) => (
          <Card 
            key={user.id}
            title={user.name} 
            phone={user.phone} 
            email={user.email} 
            address={user.address.street}  />
        )))}
      </div>
  );
}

export default Contact;
