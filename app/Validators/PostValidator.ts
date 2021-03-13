import {schema} from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    title: schema.string(),
    content: schema.string(),
    user_id: schema.number(),
    img: schema.file({
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg']
    })
  })

  public messages = {
    'img.size': 'Taille de l\'image ne doit pas faire plus de 2mb',
    'img.extnames': 'Extension de fichier non supporté'
  }
}
