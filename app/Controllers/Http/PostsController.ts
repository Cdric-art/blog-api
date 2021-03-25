import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import Post from "App/Models/Post";
import Application from "@ioc:Adonis/Core/Application";
import Comment from "App/Models/Comment";
import PostValidator from "App/Validators/PostValidator";

export default class PostsController {

    public index() {
        return Post.all()
    }

    public async store({request, response}: HttpContextContract) {
        const payload = await request.validate(PostValidator)

        if (request.file('img')) {
            const name = request.file('img')?.clientName
            await request.file('img')?.move(Application.appRoot + '/client/public/uploads', {
                name: name
            })
            // @ts-ignore
            payload.img = name
        }

        await Post.create(payload)

        return response.status(201).send({message: 'Votre post est publié :)'})

    }

    public async show({params, response}: HttpContextContract) {
        const post = await Post.findOrFail(params.id)
        const commentPost = await Comment.query().where('post_id', params.id)

        return response.status(200).json({post, commentPost})
    }

    public async update({params, request}: HttpContextContract) {
        const payload = await request.validate(PostValidator)
        const post = await Post.findOrFail(params.id)

        if (request.file('img')) {
            const name = request.file('img')?.clientName
            await request.file('img')?.move(Application.appRoot + '/client/public/uploads', {
                name: name
            })
            // @ts-ignore
            payload.img = name
        }

        return post.merge(payload).save()

    }

    public async destroy({params, response}: HttpContextContract) {
        const post = await Post.findOrFail(params.id)
        await post.delete()

        return response.noContent()
    }

}
