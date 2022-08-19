import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div>
        <h1>Welcome to SVL</h1>
        <nav>
        
          <Link to='/about'>About</Link>{" "}
           <Link to='/user'>User</Link>
        
        </nav>
      </div>
    </>
  )
}
