import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ListGroup, Card, Row, Col, Badge } from 'react-bootstrap';
import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);

export default function Dashboard({ user }) {
    const [investments, setInvestments] = useState([]);

    useEffect(() => {
        if (user) {
            axios.get('http://localhost:5000/api/investments', { withCredentials: true })
                .then(res => setInvestments(res.data))
                .catch(err => console.error("Error fetching investments:", err));
        }
    }, [user]);

    if (!user) return <h2 className="p-5 text-center text-danger">Please login to view your dashboard</h2>;

    const labels = investments.map(inv => inv.projectName);
    const amounts = investments.map(inv => inv.amount);

    const barData = {
        labels,
        datasets: [
            {
                label: 'Investment Amount (₹)',
                data: amounts,
                backgroundColor: 'rgba(46, 204, 113, 0.7)',
                borderRadius: 6
            }
        ]
    };

    const pieData = {
        labels,
        datasets: [
            {
                data: amounts,
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#2ECC71', '#9B59B6',
                    '#F39C12', '#E67E22', '#1ABC9C', '#34495E', '#E74C3C'
                ]
            }
        ]
    };

    return (
        <Container className="py-5">
            <Card className="shadow-lg border-0 p-4 mb-4" style={{ borderRadius: '15px' }}>
                <h2 className="text-success fw-bold mb-2">Welcome, {user.name}</h2>
                <p className="text-muted mb-0">Here’s a quick overview of your investments</p>
            </Card>

            {investments.length > 0 ? (
                <>
                    <Card className="shadow-sm p-3 mb-4" style={{ borderRadius: '10px' }}>
                        <h4 className="mb-3 text-primary">Your Investments</h4>
                        <ListGroup variant="flush">
                            {investments.map((inv, index) => (
                                <ListGroup.Item
                                    key={index}
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <span>{inv.projectName}</span>
                                    <Badge bg="success" pill>₹{inv.amount}</Badge>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card>

                    <Row>
                        <Col md={6} className="mb-4">
                            <Card className="p-3 shadow-sm" style={{ borderRadius: '10px' }}>
                                <h5 className="text-center mb-3">Investment Amount by Project</h5>
                                <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="p-3 shadow-sm" style={{ borderRadius: '10px' }}>
                                <h5 className="text-center mb-3">Investment Distribution</h5>
                                <Pie data={pieData} options={{ responsive: true }} />
                            </Card>
                        </Col>
                    </Row>
                </>
            ) : (
                <Card className="shadow-sm p-4 text-center" style={{ borderRadius: '10px' }}>
                    <p className="text-muted mb-0">💡 You haven’t made any investments yet. Start exploring projects!</p>
                </Card>
            )}
        </Container>
    );
}
