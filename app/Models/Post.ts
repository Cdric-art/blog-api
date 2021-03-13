import { DateTime } from 'luxon'
import {BaseModel, column, hasMany, HasMany} from '@ioc:Adonis/Lucid/Orm'
import Comment from "App/Models/Comment";

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public content: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>

  @column()
  public user_id: number
}
