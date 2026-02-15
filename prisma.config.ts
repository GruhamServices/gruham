import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  datasource: {
    url: env('DIRECT_URL'), //USING DIRECT URL TEMPORARILY, USE DB_URL WHEN SCALING
  },
})