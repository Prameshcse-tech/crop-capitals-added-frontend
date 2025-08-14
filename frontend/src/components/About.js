import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function About() {
  return (
    <>
      {/* Header Banner */}
      <div
        style={{
          backgroundImage: "url('/images/farmer-field.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <h1 className="fw-bold display-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)', padding: '10px 20px', borderRadius: '10px' }}>
          About Us
        </h1>
      </div>

      <Container className="py-5">
        {/* Mission Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 className="text-success fw-bold">Our Mission</h2>
            <p className="text-muted fs-5">
              We bridge the gap between **passionate farmers** and **visionary investors**.
              Our platform empowers farmers with the resources they need, while offering investors
              an opportunity to support sustainable agriculture with profitable returns.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="/images/farmers-smiling.jpg"
              alt="Farmers"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        {/* How We Work */}
        <h3 className="text-success text-center mb-4">How We Work</h3>
        <Row className="g-4">
          {[
            { title: 'Identify Needs', desc: 'Work with farmers to identify funding needs.', icon: '🌱' },
            { title: 'Connect Investors', desc: 'Showcase farm projects to investors.', icon: '🤝' },
            { title: 'Fund & Support', desc: 'Provide capital and ongoing guidance.', icon: '💰' },
            { title: 'Share the Harvest', desc: 'Return profits to both farmers & investors.', icon: '🌾' },
          ].map((step, index) => (
            <Col md={3} key={index}>
              <Card className="shadow-sm h-100 text-center border-0 hover-shadow" style={{ padding: '20px' }}>
                <div style={{ fontSize: '2.5rem' }}>{step.icon}</div>
                <Card.Body>
                  <Card.Title>{step.title}</Card.Title>
                  <Card.Text className="text-muted">{step.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Impact on Society */}
        <h3 className="mt-5 text-success text-center">Impact on Society</h3>
        <Row className="text-center mt-4 g-4">
          {[
            { title: 'Empowering Farmers', desc: 'Better seeds, tools, and training.', icon: '👨‍🌾' },
            { title: 'Boosting Rural Economy', desc: 'More jobs and stronger communities.', icon: '🏘️' },
            { title: 'Promoting Sustainability', desc: 'Eco-friendly farming techniques.', icon: '🌍' },
          ].map((impact, index) => (
            <Col md={4} key={index}>
              <Card className="border-0 shadow-sm h-100 p-3">
                <div style={{ fontSize: '2.5rem' }}>{impact.icon}</div>
                <Card.Body>
                  <Card.Title>{impact.title}</Card.Title>
                  <Card.Text className="text-muted">{impact.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Future Vision */}
        <Row className="mt-5 align-items-center">
          <Col md={8}>
            <h3 className="text-success">Our Vision for the Future</h3>
            <p className="text-muted fs-5">
              In the coming years, we plan to expand globally, integrate **smart farming technologies**,
              and create a transparent, blockchain-backed supply chain. Our dream is to make agriculture
              not just sustainable, but a **thriving opportunity for future generations**.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <Button variant="success" size="lg" href="/projectlist">
              Explore Projects 🚀
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
