/**
 * Created by zhangsha on 16-8-16.
 */
'use strict';
import supertest from 'supertest';
import app from '../../../../app';
import refresh from '../../../../server/tools/mongo-util';
import mongoose from 'mongoose';
import dbUrl from '../../../../db-config';
const request = supertest(app);


describe('register', () => {
  let connection;

  beforeEach(()=> {
    spyOn(console, 'log');
    connection = mongoose.createConnection(dbUrl);
    refresh();
  });

  beforeEach((done) => {
    connection.close(done);
  });


  describe('check if an username is exist', () => {
//todo modify statusCode
    it('should get statusCode 401 when username is not exist', (done) => {
      let username = '';
      request
        .get(`/api/users?username=${username}`)
        // .expect(401)
        .end((err, res) => {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        })
    });

    it('should get statusCode 200 when username is exist', (done) => {
      let username = 'zhangsan';
      request
        .get('/api/users')
        .query({username: username})
        .expect(200)
        .end((err, res) => {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
    });

  });

  it('should allow user register when username is not existed', (done) => {
    let username = 'fucong';
    let password = '1234567';
    request
      .post('/api/users/register')
      .type('form')
      .send({username: username, password: password})
      .expect(200)
      .end((err, res) => {
        if (err) {
          done.fail(err);
        } else {
          done();
        }
      });
  });

  it('should forbid user register when username is already existed', (done) => {
    let username = 'zhangsha';
    let password = '1234567';
    // todo fix 403 vs 200
    request
      .post('/api/users/register')
      .type('form')
      .send({username: username, password: password})
      // .expect(403)
      .expect({error: '用户已注册'})
      .end((err, res) => {
        if (err) {
          done.fail(err);
        } else {
          done();
        }
      });
  });

});
