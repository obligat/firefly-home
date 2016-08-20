/**
 * Created by fcc on 16-8-19.
 */
'use strict';
import supertest from 'supertest';
import app from '../app';
const request = supertest(app);

describe('get', function () {
  it('should return information of houses', function (done) {
    let house = [{
      name: '轻轻屋',
      price: 389,
      address: '五道口只虫路占菜园',
      city: '北京',
      type: '单间',
      image: 'images/houseImages/01.jpg'
    }, {
      name: '森林风景观',
      price: 543,
      address: '青阳万和路99号丽阳天下',
      city: '北京',
      type: '整套',
      image: 'images/houseImages/02.jpg'
    }, {
      name: '温馨单间',
      price: 212,
      address: '地铁直达天府广场',
      city: '成都',
      type: '单间',
      image: 'images/houseImages/03.jpg'
    }, {
      name: '洛夫阁',
      price: 421,
      address: '高声桥北街',
      city: '北京',
      type: '单间',
      image: 'images/houseImages/04.jpg'
    }, {
      name: '天紫界国际公寓',
      price: 423,
      address: '锦江一环东五段46号',
      city: '成都',
      type: '整套',
      image: 'images/houseImages/05.jpg'
    }, {
      name: '浪漫家园',
      price: 231,
      address: '朝阳北路雅成一里小区',
      city: '北京',
      type: '单间',
      image: 'images/houseImages/06.jpg'
    }, {
      name: '花藤原',
      price: 199,
      address: '朝阳亚运村小营北路',
      city: '北京',
      type: '单间',
      image: 'images/houseImages/07.jpg'
    }, {
      name: '荷马的家',
      price: 299,
      address: '普陀祁连山南路999弄',
      city: '上海',
      type: '单间',
      image: 'images/houseImages/08.jpg'
    }, {
      name: '阳光旁屋',
      price: 321,
      address: '皇浦陕西南路',
      city: '上海',
      type: '单间',
      image: 'images/houseImages/09.jpg'
    }];

    request
      .get('/api/houses')
      .expect(house)
      .end((err, res)=> {
        if (err) {
          done.fail(err);
        } else {
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