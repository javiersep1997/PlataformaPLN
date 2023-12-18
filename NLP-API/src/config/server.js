import { config } from 'dotenv'
config()
// Database
export const JWT_SECRET = process.env.JWT_SECRET || 'secret'

// Port
export const PORT = process.env.PORT || 4000
// CORS
const origin = process.env.ORIGIN || 'http://localhost:5173'

export const corsOptions = {
  origin: [origin],
  credentials: true,
}
