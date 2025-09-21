import React, { useState, useEffect } from 'react';

const UseEffectExamples = () => {
  
  const [count, setCount] = useState(0);
  
 
  const [data, setData] = useState(null);
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    console.log('Component renderrrrrr');
  });

  useEffect(() => {
    console.log('Componentttttt mounted');
    
    const fetchData = async () => {
      try {
        const sampleData = {
          title: 'Exploring the Rich Culture of India',
          body: 'India is a land of diverse cultures, traditions, and heritage. From the snow-capped Himalayas in the north to the tropical beaches of the south, India offers a unique blend of experiences. The country is known for its rich history, vibrant festivals, and delicious cuisine that varies from region to region.'
        };
        setData(sampleData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []); 

  useEffect(() => {
    console.log('Set up');
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      console.log('Cleaningggg');
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  const indianUsers = {
    1: {
      name: 'Ishwari',
      email: 'ishwari@gmail.com',
      phone: '+91 98765ttn 43210',
      city: 'Pune',
      profession: 'Student'
    },
    2: {
      name: 'Riya',
      email: 'riya@gmail.com',
      phone: '+91 87654 32109738',
      city: 'Pune',
      profession: 'Doctor'
    },
    3: {
      name: 'Ishaaaa',
      email: 'isha@gmail.com',
      phone: '+91 76543 21098',
      city: 'Pune',
      profession: 'Entrepreneur'
    }
  };

  useEffect(() => {
    const fetchUser = () => {
      try {
       
        setTimeout(() => {
          setUser(indianUsers[userId]);
        }, 300);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    
    fetchUser();
  }, [userId]);

  return (
    <div className="container">
      <h1 className="text-center mb-8">
        useEffect Hook Examples
      </h1>
      
      <section className="card">
        <h2>1. Basic useEffect</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <p style={{color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem'}}>
          Count updated on browser console
        </p>
      </section>
      
      <section className="card">
        <h2>2. Data Fetching</h2>
        {data ? (
          <div>
            <h3 style={{color: 'var(--text-color)'}}>Post Title: {data.title}</h3>
            <p style={{color: 'var(--text-color)'}}>{data.body}</p>
          </div>
        ) : (
          <p>Loading post data...</p>
        )}
      </section>
      
      <section className="card">
        <h2>3. Window Resize</h2>
        <p>Window width: <strong>{windowWidth}px</strong></p>
        <p style={{color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem'}}>
         Width Updated when window resized
        </p>
      </section>
      
      <section className="card">
        <h2>4. Fetching Data Based on State</h2>
        <div style={{display: 'flex', gap: '0.75rem', margin: '1rem 0'}}>
          <button 
            onClick={() => setUserId(1)}
            className="secondary"
          >
            User 1
          </button>
          <button 
            onClick={() => setUserId(2)}
            className="secondary"
          >
            User 2
          </button>
          <button 
            onClick={() => setUserId(3)}
            className="secondary"
          >
            User 3
          </button>
        </div>
        {user ? (
          <div style={{
            backgroundColor: 'var(--border-color)',
            borderRadius: 'var(--border-radius)', 
            padding: '1rem',
            marginTop: '1rem'
          }}>
            <h3 style={{marginBottom: '0.5rem'}}>{user.name}</h3>
            <p style={{margin: '0.25rem 0'}}>📧 {user.email}</p>
            <p style={{margin: '0.25rem 0'}}>📱 {user.phone}</p>
            <p style={{margin: '0.25rem 0'}}>🏙️ {user.city}</p>
            <p style={{margin: '0.25rem 0'}}>💼 {user.profession}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </section>
    </div>
  );
};

export default UseEffectExamples;
