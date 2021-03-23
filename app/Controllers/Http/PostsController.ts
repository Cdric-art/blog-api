import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from "App/Models/Post";
import Application from "@ioc:Adonis/Core/Application";
import Comment from "App/Models/Comment";

export default class PostsController {

  public index () {
    return Post.all()
  }

  public async store ({ request, response }: HttpContextContract) {

    const post = new Post()

    if (request.file('img')) {
      const name = request.file('img')?.clientName
      await request.file('img')?.move(Application.appRoot + '/client/public/uploads', {
        name: name
      })
      post.img = name
    }

    post.title = request.post().title
    post.content = request.post().content
    post.user_id = request.post().user_id

    await post.save()

    return response.created(post)

  }

  public async show ({ params, response }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    const commentPost = await Comment.query().where('post_id', params.id)

    return response.status(200).json({post, commentPost})
  }

  public async update ({ params, request }: HttpContextContract) {

    const post = await Post.findOrFail(params.id)

    if (request.file('img')) {
      const name = request.file('img')?.clientName
      await request.file('img')?.move(Application.appRoot + '/client/public/uploads', {
        name: name
      })
      post.img = name
    }

    post.title = request.post().title
    post.content = request.post().content
    post.user_id = request.post().user_id

    return post.save()

  }

  public async destroy ({ params, response }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    await post.delete()

    return response.noContent()
  }

}
