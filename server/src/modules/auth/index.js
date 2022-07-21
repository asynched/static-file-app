import AuthController from '@/modules/auth/auth.controller'
import AuthService from '@/modules/auth/auth.service'

import { bounded } from '@/lib'

export default function register(router) {
  const authController = bounded(new AuthController(new AuthService()))

  router.get('/register', authController.register)
}
