/**
 * Created by afaren on 8/18/16.
 */
'use strict';

import supertest from 'supertest';
import server from '../../../../app';
const request = supertest(server);





function isUsernameExist(username, exist, done) {
  request
    .get('/api/users')
    .query({username: username})
    .expect({exist: exist})
    .end((err, res) => {
      if (err) {
        done.fail(err);
      } else {
        done();
      }
    })
}
fdescribe('login', () => {

  beforeEach(()=> {
    spyOn(console, 'log');
  });

  it('should reject username when it is not exist', (done)=> {
    isUsernameExist('afar', false, done)
  });

  it('should access username when it is exist', (done)=> {
    isUsernameExist('lisi', true, done);
  });



});