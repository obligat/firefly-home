/**
 * Created by zhangsha on 16-8-16.
 */
'use strict';
import supertest from 'supertest';
import app from '../app';
const request = supertest(app);

fdescribe('get', () => {
    it('should return username is exsit?', (done) => {
        let username = 'zhangsha';
        request
            .get(`/user/${username}`)
            .expect({err: '用户名已存在', data: ''})
            .end((err, res) => {
                if (err) {
                    done.fail(err);
                } else {
                    done();
                }
            })
    })


});

