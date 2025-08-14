import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ListGroup, Card, Row, Col } from 'react-bootstrap';
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
                .then(res => setInvestments(res.data));
        }
    }, [user]);

    if (!user) return <h2 className="p-5 text-center">Please login to view dashboard</h2>;

    // Prepare chart data
    const labels = investments.map(inv => inv.projectName);
    const amounts = investments.map(inv => inv.amount);

    const barData = {
        labels,
        datasets: [
            {
                label: 'Investment Amount (₹)',
                data: amounts,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }
        ]
    };

    const pieData = {
        labels,
        datasets: [
            {
                data: amounts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(201, 203, 207, 0.6)',
                    'rgba(100, 149, 237, 0.6)',
                    'rgba(46, 204, 113, 0.6)',
                    'rgba(241, 196, 15, 0.6)'
                ]
            }
        ]
    };

    return (
        <Container className="py-5">
            <h2 className="text-success fw-bold mb-4">Welcome, {user.name}</h2>
            <h4 className="mb-3">Your Investments</h4>

            {investments.length > 0 ? (
                <>
                    <ListGroup className="mb-4">
                        {investments.map((inv, index) => (
                            <ListGroup.Item key={index}>
                                {inv.projectName} - ₹{inv.amount}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    <Row>
                        <Col md={6} className="mb-4">
                            <Card className="p-3 shadow-sm">
                                <h5 className="text-center mb-3">Investment Amount by Project</h5>
                                <Bar data={barData} />
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="p-3 shadow-sm">
                                <h5 className="text-center mb-3">Investment Distribution</h5>
                                <Pie data={pieData} />
                            </Card>
                        </Col>
                    </Row>
                </>
            ) : (
                <p className="text-muted">You have not made any investments yet.</p>
            )}
        </Container>
    );
}
