/**
 * Created by fcc on 16-8-19.
 */
'use strict';
import supertest from 'supertest';
import app from '../app';
const request = supertest(app);

function callback(err, res, done){
  if(err, res){
    done.fail(err);
  }else{
    expect(res.body.length).toEqual(expectedCount);
    done();
  }
}

describe('get', function () {
  it('should return information of houses', (done)=> {

    const expectedCount = 19;
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

  it('should return information of houses', (done)=> {
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

