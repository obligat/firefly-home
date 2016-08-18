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
      callback(err, done)
    })
}

function login(username, password, status, loginMessage, done) {
  request
    .get('/api/users/validation')
    .query({username: username, password: password})
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

  it('should reject username when it is not exist',(done)=> {
    request
      .get('/api/users')
      .query({username: 'afar'})
      .expect({exist:false})
      .end((err, res) => {
        if(err) {
          done.fail(err);
        }else{
          done();
        }
      })

  });
  it('should access username when it is exist',(done)=> {
    request
      .get('/api/users')
      .query({username: 'zhangsan'})
      .expect({exist:true})
      .end((err, res) => {
        if(err) {
          done.fail(err);
        }else{
          done();
        }
      })

  });
  it('should reject login when username or password is null', (done) => {
    const status = 404;
    login(null, null, status, {error: true, message: '用户名及密码不能为空'}, done);
    login('afar', null, status, {error: true, message: '用户名及密码不能为空'}, done);
    login(null, 'afar', status, {error: true, message: '用户名及密码不能为空'}, done);
  });

  describe('username exist', () => {
    it('should access username', (done)=> {
      const status = 200;
      isUsernameExist('lisi', status, true, done);
    });

    it('should access login when password match', (done) => {
      const status = 200;
      login('lisi', '12345', status, {error: false, message: ''}, done);
    });

    it('should reject login when password does not match', (done) => {
      const status = 404;
      login('lisi', 'xxxxx', status, {error: true, message: '密码错误'}, done);
    })
  });

  describe('username does not exist', () => {
    it('should reject username', (done)=> {
      const status = 404;
      isUsernameExist('afar', status, false, done);
    });

    it('should reject login', (done) => {
      const status = 404;
      login('xxxxx', '12345', status, {error: true, message: '用户不存在'}, done);
    });
  });
});