import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <h1>GunKustom Component Library Test Application</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '2rem',
        }}
      >
        <button
          onClick={() => navigate('/buttons')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#FF6B00',
            border: 'none',
            borderRadius: '0.25rem',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Button Page
        </button>
        <button
          onClick={() => navigate('/colors')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#505040',
            border: 'none',
            borderRadius: '0.25rem',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Color Palette
        </button>
      </div>
    </div>
  );
};

export default HomePage;
