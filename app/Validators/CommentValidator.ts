import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CommentValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    pseudo: schema.string(),
    content: schema.string(),
    post_id: schema.number()
  })


  public messages = {
    'pseudo.required': 'Pseudo is required to comment'
  }
}
