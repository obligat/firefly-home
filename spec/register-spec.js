/**
 * Created by zhangsha on 16-8-16.
 */
'use strict';
import supertest from 'supertest';
import app from '../app';
const request = supertest(app);

fdescribe('register', () => {
  describe('get', () => {

    beforeEach(() => {
      spyOn(console, 'log');
    });

    it('should return username is exsit?', (done) => {
      let username = 'zhangsha';
      request
        .get(`/users/?username=${username}`)
        .expect({err: '用户名已存在', data: ''})
        .end((err, res) => {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        })
    });

    it('should return username is exsit?', (done) => {
      let username = 'zhangsha1213';
      request
        .get(`/users/?username=${username}`)
        .expect({err: '', data: 'zhangsha1213'})
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



})