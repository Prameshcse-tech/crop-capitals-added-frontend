import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

export default function ProjectList({ user }) {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("name");
    const [investmentAmounts, setInvestmentAmounts] = useState({}); // store per project amount

    useEffect(() => {
        if (user) {
            axios.get('http://localhost:5000/api/projects', { withCredentials: true })
                .then(res => setProjects(res.data));
        }
    }, [user]);

    const investInProject = (id) => {
        const amount = investmentAmounts[id];
        if (!amount || amount <= 0) {
            alert("Please enter a valid amount");
            return;
        }

        axios.post('http://localhost:5000/api/invest',
            { projectId: id, amount: parseFloat(amount) },
            { withCredentials: true }
        ).then(() => {
            setProjects(prevProjects =>
                prevProjects.map(p =>
                    p.id === id ? { ...p, funded: p.funded + parseFloat(amount) } : p
                )
            );
            setInvestmentAmounts(prev => ({ ...prev, [id]: "" })); // clear input after invest
            alert(`You invested ₹${amount}`);
        });
    };

    if (!user) return <h2 className="p-5 text-center">Please login to see projects</h2>;

    let filteredProjects = projects.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filteredProjects.sort((a, b) => {
        if (sortOption === "name") return a.name.localeCompare(b.name);
        else if (sortOption === "goal") return a.goal - b.goal;
        else if (sortOption === "funded") return b.funded - a.funded;
        return 0;
    });

    return (
        <Container className="py-5">
            <h2 className="text-success fw-bold mb-4">Available Projects</h2>

            <Row className="mb-4">
                <Col md={6}>
                    <Form.Control
                        type="text"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Col>
                <Col md={6}>
                    <Form.Select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value="name">Sort by Name (A–Z)</option>
                        <option value="goal">Sort by Goal Amount (Low → High)</option>
                        <option value="funded">Sort by Funded Amount (High → Low)</option>
                    </Form.Select>
                </Col>
            </Row>

            <Row>
                {filteredProjects.length > 0 ? (
                    filteredProjects.map(p => (
                        <Col md={4} key={p.id} className="mb-4">
                            <Card className="shadow-lg h-100 border-0"
                                style={{ transition: 'transform 0.2s', cursor: 'pointer' }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <Card.Img variant="top" src={p.image || "https://via.placeholder.com/300x200"} style={{ height: '200px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title className="text-success">{p.name}</Card.Title>
                                    <Card.Text className="text-muted">{p.description || "High-quality agricultural project to invest in."}</Card.Text>
                                    <Card.Text><strong>Goal:</strong> ₹{p.goal}</Card.Text>
                                    <Card.Text><strong>Funded:</strong> ₹{p.funded}</Card.Text>

                                    {/* Input for investment amount */}
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter amount (₹)"
                                        value={investmentAmounts[p.id] || ""}
                                        onChange={(e) =>
                                            setInvestmentAmounts(prev => ({
                                                ...prev,
                                                [p.id]: e.target.value
                                            }))
                                        }
                                        className="mb-2"
                                    />

                                    <Button
                                        variant="success"
                                        onClick={() => investInProject(p.id)}
                                    >
                                        Invest Now
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p className="text-center text-muted">No projects match your search.</p>
                )}
            </Row>
        </Container>
    );
}
