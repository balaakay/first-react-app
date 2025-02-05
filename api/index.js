const express = require('express')
const cors = require('cors')
require('dotenv').config()
const blogRouter = require('./routes/blogs')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRouter)

app.get('/api/test', (req, res) => {
  res.json({message: 'API is working' })
})


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something went wrong' })
})

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server runnin on port ${PORT}`)
  })
}

module.exports = app
