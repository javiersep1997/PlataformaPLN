import app from './app.js'
import { PORT } from './config/server.js'

// Start server
app.listen(PORT, () =>
  console.log(`
🚀 Server ready at: http://localhost:${PORT}`)
)
