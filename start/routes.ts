/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/api', async () => {
  return { hello: 'world' }
})

// Users
Route.get('/api/admin', 'AuthController.me').middleware('auth')
Route.post('/api/admin/register', 'AuthController.register')
Route.post('/api/admin/login', 'AuthController.login')


// CRUD Post
Route
  .resource('/api/posts', 'PostsController')
  .apiOnly()

// CRUD Comments
Route
  .resource('/api/comments', 'CommentsController')
  .apiOnly()
