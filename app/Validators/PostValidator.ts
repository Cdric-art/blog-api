import {schema} from '@ioc:Adonis/Core/Validator'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

export default class PostValidator {
  constructor(protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    title: schema.string(),
    content: schema.string(),
    user_id: schema.number(),
  })

}
