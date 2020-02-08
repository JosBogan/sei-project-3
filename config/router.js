const router = require('express').Router()
const projects = require('../controllers/projects')
const auth = require('../controllers/auth')
const users = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')

router.route('/projects')
  .get(projects.index)
  .post(secureRoute, projects.create)

router.route('/projects/:id')
  .get(projects.show)
  .put(secureRoute ,projects.update)
  .delete(secureRoute, projects.destroy)

router.route('/projects/:id/comments')
  // Need an edit comment route
  .post(secureRoute, projects.commentCreate)

router.route('/projects/:id/comments/:commentId')
  .delete(secureRoute, projects.commentDelete)

router.route('/projects/:id/like')
  .get(secureRoute, projects.like)

router.route('/users')
  .get(users.index)

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.destroy)

router.route('/users/:id/like')
  .get(secureRoute, users.like)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/profile')
  .get(auth.profile)

module.exports = router