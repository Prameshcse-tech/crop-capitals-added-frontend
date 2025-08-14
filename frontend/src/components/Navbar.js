import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

export default function Navigation({ user, setUser }) {
    const logout = () => {
        axios.get('http://localhost:5000/api/logout', { withCredentials: true })
            .then(() => setUser(null));
    };

    return (
        <Navbar bg="success" variant="dark" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand>Farm Investment</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About Us</Link>
                        {user && <Link to="/dashboard" className="nav-link">Dashboard</Link>}
                        {user && <Link to="/projectlist" className="nav-link">Projects</Link>}
                    </Nav>
                    <Nav>
                        {user ? (
                            <Button variant="danger" onClick={logout}>Logout</Button>
                        ) : (
                            <Link to="/login" className="btn btn-warning">Login</Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
