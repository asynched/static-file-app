export default class AuthController {
  /**
   *
   * @param { import('./service').default } authService
   */
  constructor(authService) {
    this.authService = authService
  }

  async register(req, res) {
    const data = req.body
    const result = await this.authService.register(data)

    if (result.err) {
      return res.status(400).json({
        error: result.err,
      })
    }

    return res.status(201).json({
      message: 'Successfully registered',
    })
  }

  async login(req, res) {}
}
