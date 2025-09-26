const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/dist')))

// Routes
app.get('/', (req, res)=>res.send('Server is Live!'))



// Start server
app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT);
})