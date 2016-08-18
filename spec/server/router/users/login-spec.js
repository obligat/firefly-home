/**
 * Created by afaren on 8/18/16.
 */
'use strict';

import supertest from 'supertest';
import server from '../../../../app';
const request = supertest(server);

fdescribe('login', () => {

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

  })
});