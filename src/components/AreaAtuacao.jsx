import React, { useRef } from 'react';

const AreaAtuacao = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        padding: '5%',
      }}
    >
      <h1 style={{ color: '#000000', marginBottom: '20px' }}>ÁREAS DE ATUAÇÃO</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
        }}
      >
        <button
          onClick={scrollLeft}
          style={{
            position: 'absolute',
            left: '10px',
            zIndex: 1,
            backgroundColor: '#000',
            color: '#FFC42ECC',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          &#60;
        </button>

        <div
          ref={carouselRef}
          style={{
            display: 'flex',
            overflowX: 'hidden',
            gap: '20px',
            width: '100%',
            padding: '10px',
            scrollBehavior: 'smooth',
          }}
        >
          <div
            style={{
              minWidth: '250px',
              height: '400px',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p>Desenvolvimento Web</p>
          </div>
          <div
            style={{
              minWidth: '250px',
              height: '400px',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p>Data Science</p>
          </div>
          <div
            style={{
              minWidth: '250px',
              height: '400px',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p>Inteligência Artificial</p>
          </div>
          <div
            style={{
              minWidth: '250px',
              height: '400px',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p>Segurança da Informação</p>
          </div>
          <div
            style={{
              minWidth: '250px',
              height: '400px',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p>Desenvolvimento Mobile</p>
          </div>
          <div
            style={{
              minWidth: '250px',
              height: '400px',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p>DevOps</p>
          </div>
        </div>

        <button
          onClick={scrollRight}
          style={{
            position: 'absolute',
            right: '10px',
            zIndex: 1,
            backgroundColor: '#000',
            color: '#FFC42ECC',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          &#62; 
        </button>
      </div>
    </div>
  );
};

export default AreaAtuacao;