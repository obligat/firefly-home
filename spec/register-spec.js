/**
 * Created by zhangsha on 16-8-16.
 */
'use strict';
import supertest from 'supertest';
import app from '../app';
import refresh from '../server/tools/mongo-util';
import mongoose from 'mongoose';
import dbUrl from '../db-config';
const request = supertest(app);


describe('register', () => {
  let connection;

  beforeAll(()=> {
    spyOn(console, 'log');
    connection = mongoose.createConnection(dbUrl);
  });

  afterAll((done) => {
    refresh();
    connection.close(done);
  });


  describe('get', () => {

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

    it('should return username is exsit?', (done) => {
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

    it('should return username is exsit?', (done) => {
      let username = 'zhangsan';
      request
        .get(`/api/users/?username=${username}`)
        .expect({exist: true})
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
    it('should return the user is exist', (done) => {
      let username = 'zhangsan';
      request
        .post('/api/users/register')
        .type('form')
        .send({username: username})
        .expect({error: '用户名已注册'})
        .end((err, res) => {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
    });

    it('should add user info to database', (done) => {
      let username = 'fucong';
      let password = '1234567';
      request
        .post(`/api/users/register`)
        .type('form')
        .send({username: username, password: password})
        .expect({error: ''})
        .end((err, res) => {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });

    });


    describe('post', () => {
      it('should add user info to database', (done) => {
        let username = 'tongyang';
        let password = '1234567';
        request
          .post(`/api/users/register`)
          .type('form')
          .send({username: username, password: password})
          .expect({error: ''})
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
});
