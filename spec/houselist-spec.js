/**
 * Created by fcc on 16-8-19.
 */
'use strict';
import supertest from 'supertest';
import app from '../app';
const request = supertest(app);

describe('get', function () {
  it('should return information of houses', function (done) {

  const expectedCount =19;
    request
      .get('/api/houses')
      .end((err, res)=> {
        if (err) {
          done.fail(err);
        } else {
          expect(res.body.length).toEqual(expectedCount);
          done();
        }
      });
  });

  it('should return information of houses', function (done) {
    let house = null;
    request
      .get('/api/houses')
      .end((err, res)=> {
        if (err) {
          done.fail(err);
        } else {
          expect(res.body).not.toEqual(house);
          done();
        }
      });
  });

});

