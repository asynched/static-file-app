import express, { json } from 'express'
import mongoose from 'mongoose'

import fileModule from '@/modules/file'
import authModule from '@/modules/auth'

const bootstrap = async () => {
  const app = express()
  await mongoose.connect(process.env.MONGO_URI)

  app.use(json())

  fileModule(app)
  authModule(app)

  app.listen(3000, () => {
    console.log('Server listening on port 3000')
  })
}

bootstrap()
