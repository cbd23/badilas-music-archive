import pkg from 'pg'
const { Pool } = pkg

import 'dotenv/config'

export default new Pool({
    connectionString: `postgresql://${process.env.USERNAME}:${process.env.PASSWORD}@localhost:5432/music_archive`
})