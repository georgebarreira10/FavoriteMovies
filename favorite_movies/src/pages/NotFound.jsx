import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  let navigate = useNavigate();

  const voltar = () => {
    navigate('/');
  };

  return (
    
    <div>
      
      <h1>Page Not Found</h1>
      <button onClick={(voltar)}>Voltar</button>
    
    </div>
  );
}
