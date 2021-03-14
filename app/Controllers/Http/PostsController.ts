import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from "App/Models/Post";
import Application from "@ioc:Adonis/Core/Application";
import PostValidator from "App/Validators/PostValidator";
import Comment from "App/Models/Comment";

export default class PostsController {

  public index () {
    return Post.all()
  }

  public async store ({ request, response }: HttpContextContract) {

    const payload = await request.validate(PostValidator)

    if (payload.img) {
      const fileName = new Date().getTime()
      await payload.img.move(Application.tmpPath('uploads'), {
        name: `${fileName}.${payload.img.extname}`
      })
    }

    const post = await Post.create(payload)

    return response.created(post)

  }

  public async show ({ params, response }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    const commentPost = await Comment.query().where('post_id', params.id)

    return response.status(200).json({post, commentPost})
  }

  public async update ({ params, request }: HttpContextContract) {

    const payload = await request.validate(PostValidator)
    const post = await Post.findOrFail(params.id)

    if (payload.img) {
      const fileName = new Date().getTime()
      await payload.img.move(Application.tmpPath('uploads'), {
        name: `${fileName}.${payload.img.extname}`
      })
    }

    return post.merge(payload).save()

  }

  public async destroy ({ params, response }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    await post.delete()

    return response.noContent()
  }

}
