import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div style={{
      backgroundImage: `url('/images/farmer.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      color: 'white'
    }}>
      <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: '100%' }}>
        <Container className="d-flex flex-column justify-content-center align-items-center h-100 text-center">
          <h1 className="fw-bold display-4">Empowering Farmers, Growing Futures</h1>
          <p className="lead mt-3">Invest in agriculture and be part of a sustainable tomorrow.</p>
          <Button variant="success" size="lg" href="/projectlist">Explore Projects</Button>
        </Container>
      </div>
    </div>
  );
}
