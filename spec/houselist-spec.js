/**
 * Created by fcc on 16-8-19.
 */
'use strict';
import supertest from 'supertest';
import app from '../app';
const request = supertest(app);

function callback(err, res, done, expectedCount) {
  if (err) {
    done.fail(err);
  } else {
    expect(res.body.length).toEqual(expectedCount);
    done();
  }
}

function callbackForError(err, res, done, house) {
  if (err) {
    done.fail(err);
  } else {
    expect(res.body).not.toEqual(house);
    done();
  }
}

describe('get', function () {
  it('should return information of houses', (done)=> {

    const expectedCount = 19;
    request
      .get('/api/houses')
      .end((err, res)=> {
        callback(err, res, done, expectedCount);
      });
  });

  it('should return no information of houses', (done)=> {
    let house = null;
    request
      .get('/api/houses')
      .end((err, res)=> {
        callbackForError(err, res, done, house);
      });
  });

  fit('should return the information of specific city', (done)=> {
    const expectedCount = 9;

    const city = "北京";
    request.get(encodeURI(`/api/houses/${city}`))
      .end((err, res) => {
        if (err) {
          done.fail(err);
        }
        else {
          expect(res.body.length).toEqual(expectedCount)
          done();

        }
      });
  });
});

