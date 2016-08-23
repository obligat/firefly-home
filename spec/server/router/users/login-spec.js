/**
 * Created by afaren on 8/18/16.
 */
'use strict';

import supertest from 'supertest';
import server from '../../../../app';
const request = supertest(server);

function callback(err, done) {
  if (err) {
    done.fail(err);
  } else {
    done();
  }
}

function isUsernameExist(username, status, exist, done) {
  request
    .get('/api/users')
    .query({username: username})
    .expect(status)
    .expect({exist: exist})
    .end((err, res) => {
      callback(err, done);
    });
}

function login(username, password, status, loginMessage, done) {
  request
    .post('/api/users/validation')
    .type('form')
    .send(`username=${username}`)
    .send(`password=${password}`)
    .expect(status)
    .expect(loginMessage)
    .end((err, res)=> {
      callback(err, done);
    })
}

describe('login', () => {

  beforeEach(()=> {
    spyOn(console, 'log');
  });


  describe('username exist', () => {
    it('should access username', (done)=> {
      const status = 200;
      isUsernameExist('zhangsha', status, true, done);
    });

    it('should access login when password match', (done) => {
      const status = 200;
      login('zhangsha', '123456', status, {error: false, message: ''}, done);
    });
    //todo modify statusCode to 401
    it('should reject login when password does not match', (done) => {
      // const status = 401;
      const status = 200;
      login('zhangsha', 'xxxxx', status, {error: true, message: '密码错误'}, done);
    })
  });

  describe('username does not exist', () => {
    it('should reject username', (done)=> {
      // const status = 401;
      const status = 200;
      isUsernameExist('afar', status, false, done);
    });

    it('should reject login', (done) => {
      // const status = 401;
      const status = 200;
      login('xxxxx', '123456', status, {error: true, message: ''}, done);
    });
  });
});