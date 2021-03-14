import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

import Comment from "App/Models/Comment";
import CommentValidator from "App/Validators/CommentValidator";

export default class CommentsController {

  public index() {
    return Comment.all()
  }

  public async store({request, response}: HttpContextContract) {
    const payload = await request.validate(CommentValidator)
    const comment = await Comment.create(payload)

    return response.created(comment)
  }

  public async update({params, request}: HttpContextContract) {
    const payload = await request.validate(CommentValidator)
    const comment = await Comment.findOrFail(params.id)

    return comment.merge(payload).save()
  }

  public async destroy({params, response}: HttpContextContract) {
    const comment = await Comment.findOrFail(params.id)
    await comment.delete()

    return response.noContent()
  }

}
