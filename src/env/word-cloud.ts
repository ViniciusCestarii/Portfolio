import { z } from 'zod'

const envSchema = z.object({
  GITHUB_API_URL: z.string().url(),
  GITHUB_USERNAME: z.string(),
  GITHUB_TOKEN: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid wordCloudEnv variables', _env.error.format())

  throw new Error('Invalid wordCloudEnv variables')
}

export const wordCloudEnv = _env.data
