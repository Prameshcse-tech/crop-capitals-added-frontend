const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const projects = require('./data/projects.json');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true
}));

// Dummy user
const USER = { email: 'test@test.com', password: '1234', name: 'Investor John' };

// Auth Routes
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (email === USER.email && password === USER.password) {
        req.session.user = USER;
        return res.json({ success: true, user: USER });
    }
    res.json({ success: false, message: "Invalid credentials" });
});

app.get('/api/logout', (req, res) => {
    req.session.destroy();
    res.json({ success: true });
});

// Project Routes
app.get('/api/projects', (req, res) => {
    if (!req.session.user) return res.status(401).json({ message: "Not logged in" });
    res.json(projects);
});

app.get('/api/user', (req, res) => {
    if (req.session.user) return res.json({ user: req.session.user });
    res.json({ user: null });
});
// Store investments in session
app.post('/api/invest', (req, res) => {
    const { projectId, amount } = req.body;
    if (!req.session.user) return res.status(401).json({ message: "Not logged in" });

    // Find project
    const project = projects.find(p => p.id === projectId);
    if (!project) return res.status(404).json({ message: "Project not found" });

    // Update funded amount
    project.funded += amount;

    // Save to user's session investments
    if (!req.session.user.investments) req.session.user.investments = [];
    req.session.user.investments.push({ projectName: project.name, amount });

    res.json({ success: true, investments: req.session.user.investments });
});

// Fetch investments for dashboard
app.get('/api/investments', (req, res) => {
    if (!req.session.user) return res.status(401).json({ message: "Not logged in" });
    res.json(req.session.user.investments || []);
});


app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
