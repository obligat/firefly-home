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
  beforeAll(()=> {
    spyOn(console, 'log');
  })
  it('should return information of houses', (done)=> {
    const expectedCount = 19;

    request
      .get('/api/houses')
      .end((err, res)=> {
        callback(err, res, done, expectedCount);
      });
  });

  it('should not return no information of houses', (done)=> {
    let house = null;

    request
      .get('/api/houses')
      .end((err, res)=> {
        callbackForError(err, res, done, house);
      });
  });

  it('should return the information of specific city', (done)=> {
    const expectedCount = 9;
    const city = "北京";

    request
      .get('/api/houses')
      .query({city})
      .end((err, res) => {
        callback(err, res, done, expectedCount);
      });
  });

  it('should not return no information of specific city', (done)=> {
    let expected = null;
    const city = "北京";

    request
      .get('/api/houses')
      .query({city})
      .end((err, res)=> {
        callbackForError(err, res, done, expected);
      });
  });

  it('should return sorted house list', (done)=> {
    const city = "成都";
    const sortRule = 'price';
    const expectedCount = 2;

    request
      .get('/api/houses')
      .query({city})
      .query({sortRule})
      .end((err, res)=> {
        callback(err, res, done, expectedCount);
      });
  });

  it('should not return no information of sorted house', (done)=> {
    const city = '成都';
    const sortRule = 'price';
    const expexted = null;

    request
      .get('/api/houses')
      .query({city})
      .query({sortRule})
      .end((err, res)=> {
        callbackForError(err, res, done, expexted);
      });
  });
});

