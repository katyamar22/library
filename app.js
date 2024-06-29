// Import the required modules
const express= require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');

// Create a new Express application
const app = express();

// Set up the body parser middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))

// Connect to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'LibraryDB'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database');
});

// Listen on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Define the routes

// first page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Get all books
app.get('/books', (req, res) => {
    const query = 'SELECT * FROM books';
    connection.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
});

// View authors
app.get('/authors', (req, res) => {
    const query = 'SELECT * FROM Authors';
    connection.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
});

// View genres
app.get('/genres', (req, res) => {
    const query = 'SELECT * FROM genres';
    connection.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
});

// View publishers
app.get('/publishers', (req, res) => {
    const query = 'SELECT * FROM publishers';
    connection.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
});

// View Staff   
app.get('/staff', (req, res) => {
    const query = 'SELECT * FROM staff';
    connection.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
});

// View members
app.get('/members', (req, res) => {
    const query = 'SELECT * FROM members';
    connection.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
});

// View loans
app.get('/loans', (req, res) => {
    const query = 'SELECT * FROM loans';
    connection.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
});

// View Fines
app.get('/fines', (req, res) => {
    const query = 'SELECT * FROM fines';
    connection.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
});

// View Holds
app.get('/holds', (req, res) => {
    const query = 'SELECT * FROM holds';
    connection.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
});