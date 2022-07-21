import bcrypt from 'bcrypt'

import { userValidator } from '@/modules/auth/validators'
import { User } from '@/modules/auth/entities'

export async function createPasswordHash(rawPassword) {
  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash(rawPassword, salt)
  return password
}

export async function validatePasswordHash(rawPassword, passwordHash) {
  const isValid = await bcrypt.compare(rawPassword, passwordHash)
  return isValid
}

export async function registerUser(data) {
  const result = userValidator.safeParse(data)

  if (!result.success) {
    return {
      ok: null,
      err: result.error,
    }
  }

  const user = await User.create(result.data)

  return {
    ok: user,
    err: null,
  }
}
