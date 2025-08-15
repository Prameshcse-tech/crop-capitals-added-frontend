import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'animate.css';

export default function About() {
  return (
    <>
      {/* Header Banner */}
      <div
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/farmer-field.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <h1 className="fw-bold display-4 animate__animated animate__fadeInDown">
          About Us
        </h1>
      </div>

      {/* Mission Section */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '60px 0' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="animate__animated animate__fadeInLeft">
              <h2 className="text-success fw-bold">Our Mission</h2>
              <p className="text-muted fs-5">
                We bridge the gap between <strong>passionate farmers</strong> and <strong>visionary investors</strong>.
                Our platform empowers farmers with the resources they need, while offering investors
                an opportunity to support sustainable agriculture with profitable returns.
              </p>
              <p className="text-muted fs-6">
                We believe in transforming rural communities by providing access to quality resources, education, and technology.
                Every project we fund is a step toward a greener, fairer, and more prosperous world.
              </p>
            </Col>
            <Col md={6} className="animate__animated animate__fadeInRight">
              <img
                src="/images/farmers-smiling.jpg"
                alt="Farmers"
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* How We Work */}
      <section style={{ padding: '60px 0' }}>
        <Container>
          <h3 className="text-success text-center mb-4">How We Work</h3>
          <Row className="g-4">
            {[
              { title: 'Identify Needs', desc: 'Work closely with farmers to assess their funding and resource requirements.', icon: '🌱' },
              { title: 'Connect Investors', desc: 'Showcase farm projects to investors with complete transparency.', icon: '🤝' },
              { title: 'Fund & Support', desc: 'Provide capital and ongoing mentoring for farmers.', icon: '💰' },
              { title: 'Share the Harvest', desc: 'Distribute profits fairly to both farmers & investors.', icon: '🌾' },
            ].map((step, index) => (
              <Col md={3} key={index} className="animate__animated animate__fadeInUp">
                <Card
                  className="shadow-sm h-100 text-center border-0 hover-shadow"
                  style={{
                    padding: '20px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0px 10px 20px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0px 2px 5px rgba(0,0,0,0.05)';
                  }}
                >
                  <div style={{ fontSize: '2.5rem' }}>{step.icon}</div>
                  <Card.Body>
                    <Card.Title>{step.title}</Card.Title>
                    <Card.Text className="text-muted">{step.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Impact on Society */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '60px 0' }}>
        <Container>
          <h3 className="text-success text-center mb-4">Impact on Society</h3>
          <Row className="text-center mt-4 g-4">
            {[
              { title: 'Empowering Farmers', desc: 'Providing better seeds, tools, and training to improve productivity.', icon: '👨‍🌾' },
              { title: 'Boosting Rural Economy', desc: 'Creating jobs, improving infrastructure, and uplifting communities.', icon: '🏘️' },
              { title: 'Promoting Sustainability', desc: 'Encouraging eco-friendly and climate-smart farming techniques.', icon: '🌍' },
            ].map((impact, index) => (
              <Col md={4} key={index} className="animate__animated animate__fadeInUp">
                <Card
                  className="border-0 shadow-sm h-100 p-3"
                  style={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0px 12px 25px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0px 2px 5px rgba(0,0,0,0.05)';
                  }}
                >
                  <div style={{ fontSize: '2.5rem' }}>{impact.icon}</div>
                  <Card.Body>
                    <Card.Title>{impact.title}</Card.Title>
                    <Card.Text className="text-muted">{impact.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Future Vision */}
      <section style={{ padding: '60px 0' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={8} className="animate__animated animate__fadeInLeft">
              <h3 className="text-success">Our Vision for the Future</h3>
              <p className="text-muted fs-5">
                We aim to expand globally, integrate <strong>smart farming technologies</strong>,
                and create a transparent, blockchain-backed supply chain.
                Our dream is to make agriculture not just sustainable, but a <strong>thriving opportunity for future generations</strong>.
              </p>
              <p className="text-muted fs-6">
                In the near future, we envision AI-powered crop monitoring, drone-based irrigation,
                and carbon-neutral farming models to combat climate change while feeding the planet.
              </p>
            </Col>
            <Col md={4} className="text-center animate__animated animate__fadeInRight">
              <Button variant="success" size="lg" href="/projectlist">
                Explore Projects 🚀
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Banner */}
      <section
        style={{
          background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <Container>
          <h2 className="fw-bold">Be Part of the Change 🌱</h2>
          <p className="fs-5">
            Join us in revolutionizing agriculture. Whether you’re a farmer, investor, or supporter of sustainability,
            your contribution matters.
          </p>
          <Button variant="light" size="lg" href="/contact">
            Get Involved
          </Button>
        </Container>
      </section>
    </>
  );
}
