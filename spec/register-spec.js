/**
 * Created by zhangsha on 16-8-16.
 */
'use strict';
import supertest from 'supertest';
import app from '../app';
const request = supertest(app);

describe('register', () => {
  describe('get', () => {

    beforeEach(() => {
      spyOn(console, 'log');
    });

    it('should return username is exsit?', (done) => {
      let username = 'zhangsha';
      request
        .get(`/api/users/validation?username=${username}`)
        .expect({error: true, message: '用户名及密码不能为空'})
        .end((err, res) => {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        })
    });

    it('should return username is exsit?', (done) => {
      let username = 'zhangsha';
      let password = '12345';

      request
        .get(`/api/users/validation?username=${username}&password=${password}`)
        .expect({error: true, message: '用户不存在'})
        .end((err, res) => {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        })
    });

    it('should return username is exsit?', (done) => {
      let username = 'zhangsan';
      let password = '1234';

      request
        .get(`/api/users/validation?username=${username}&password=${password}`)
        .expect({error: true, message: '密码错误'})
        .end((err, res) => {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        })
    });

    it('should return username is exsit?', (done) => {
      let username = 'zhangsan';
      let password = '12345';

      request
        .get(`/api/users/validation?username=${username}&password=${password}`)
        .expect({error: false, message: ''})
        .end((err, res) => {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        })
    });

    fit('should return username is exsit?', (done) => {
      let username = 'zhangsha1213';
      request
        .get(`/api/users/?username=${username}`)
        .expect({exist: false})
        .end((err, res) => {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        })
    });
  });

  describe('post', () => {
    it('should return password length is correct?', (done) => {
      let password = '23451234';
      request
        .post('/users')
        .send({password: password})
        .expect({err: '', data: '23451234'})
        .end((err, res) => {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
    });

    it('should return password length is correct?', (done) => {
      let password = '2345';
      request
        .post('/users')
        .send({password: password})
        .expect({err: '密码长度不能少于6位', data: '2345'})
        .end((err, res) => {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });

    })
  });

  describe('post', () => {
    it('should add user info to database', (done) => {
      let username = 'tongyang';
      let password = '1234567';
      request
        .post(`/register`)
        .send({username: username, password: password})
        .expect('注册成功')
        .end((err, res) => {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        })

    });
  });
});
