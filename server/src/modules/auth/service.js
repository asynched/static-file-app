import * as useCases from '@/modules/auth/cases'

export default class AuthService {
  async register(data) {
    return await useCases.registerUser(data)
  }
}
