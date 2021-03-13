import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {

  public async me ({ auth }: HttpContextContract) {
    return auth.user
  }

  public async login ({ auth, request }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    await auth.attempt(email, password)

    return auth.user
  }

  public async register ({ request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const user = new User()
    user.email = email
    user.password = password

    await user.save()

    return response.status(201).json('api response: User created')
  }

}
