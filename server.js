const express = require('express')

// Create Express app
const app = express()

// A sample route
app.get('/', (req, res) => res.send('Hello World!'))

// Start the Express server
app.listen(8080, () => console.log('Server running on port 3000!'))