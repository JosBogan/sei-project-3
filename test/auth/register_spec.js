/* global api, describe, it, expect, beforeEach, afterEach */
const User = require('../../models/user')

const testDataIncorrect = {
  username: 'test',
  name: 'test',
  email: 'test@test.test',
  password: 'pass',
  passwordConfirmation: 'code'
}

const testDataDuplicateUsername = {
  username: 'test',
  name: 'test',
  email: 'unique@test.test',
  password: 'pass',
  passwordConfirmation: 'pass'
}

const testDataDuplicateEmail = {
  username: 'unique',
  name: 'unique',
  email: 'test@test.test',
  password: 'pass',
  passwordConfirmation: 'pass'
}

const testDataCorrect = {
  username: 'testCorrect',
  name: 'testCorrect',
  email: 'testCorrect@test.test',
  password: 'pass',
  passwordConfirmation: 'pass'
}

describe('POST /register', () => {

  beforeEach(done => { 
    User.create({
      username: 'test',
      name: 'test',
      email: 'test@test.test',
      password: 'pass',
      passwordConfirmation: 'test'
    })
      .then(() => done())
  })

  afterEach(done => { 
    User.deleteMany().then(() => done())
  })

  it('should return a 422 response if password does not match passwordConfirmation', done => {
    api.post('/api/register')
      .send(testDataIncorrect)
      .end((err, res) => {
        expect(res.status).to.eq(422)
        done()
      })
  })

  it('should return a 422 response if username already exists', done => {
    api.post('/api/register')
      .send(testDataDuplicateUsername)
      .end((err, res) => {
        expect(res.status).to.eq(422)
        done()
      })
  })

  it('should return a 422 response if email already exists', done => {
    api.post('/api/register')
      .send(testDataDuplicateEmail)
      .end((err, res) => {
        expect(res.status).to.eq(422)
        done()
      })
  })

  it('should return a 201 response if password matches passwordConfirmation', done => {
    api.post('/api/register')
      .send(testDataCorrect)
      .end((err, res) => {
        expect(res.status).to.eq(201)
        done()
      })
  })

  it('should return an object if request is correct', done => {
    api.post('/api/register')
      .send(testDataCorrect)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('should return an object with a message key if request is correct', done => {
    api.post('/api/register')
      .send(testDataCorrect)
      .end((err, res) => {
        expect(res.body).to.contains.keys([
          'message'
        ])
        done()
      })
  })
})
