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
      _id: '57b589ed459adefd0c148431',
      name: '轻轻屋',
      price: 389,
      address: '五道口只虫路占菜园',
      province: '北京',
      type: '单间',
      image: 'images/houseImages/01.jpg',
      __v: 0
    },
      {
        _id: '57b589ed459adefd0c148434',
        name: '洛夫阁',
        price: 421,
        address: '高声桥北街',
        province: '北京',
        type: '单间',
        image: 'images/houseImages/04.jpg',
        __v: 0
      },
      {
        _id: '57b589ed459adefd0c148433',
        name: '温馨单间',
        price: 212,
        address: '地铁直达天府广场',
        province: '成都',
        type: '单间',
        image: 'images/houseImages/03.jpg',
        __v: 0
      },
      {
        _id: '57b589ed459adefd0c148432',
        name: '森林风景观',
        price: 543,
        address: '青阳万和路99号丽阳天下',
        province: '北京',
        type: '整套',
        image: 'images/houseImages/02.jpg',
        __v: 0
      },
      {
        _id: '57b589ed459adefd0c148435',
        name: '天紫界国际公寓',
        price: 423,
        address: '锦江一环东五段46号',
        province: '成都',
        type: '整套',
        image: 'images/houseImages/05.jpg',
        __v: 0
      },
      {
        _id: '57b589ed459adefd0c148436',
        name: '浪漫家园',
        price: 231,
        address: '朝阳北路雅成一里小区',
        province: '北京',
        type: '单间',
        image: 'images/houseImages/06.jpg',
        __v: 0
      },
      {
        _id: '57b589ed459adefd0c148437',
        name: '花藤原',
        price: 199,
        address: '朝阳亚运村小营北路',
        province: '北京',
        type: '单间',
        image: 'images/houseImages/07.jpg',
        __v: 0
      },
      {
        _id: '57b589ed459adefd0c148438',
        name: '荷马的家',
        price: 299,
        address: '普陀祁连山南路999弄',
        province: '上海',
        type: '单间',
        image: 'images/houseImages/08.jpg',
        __v: 0
      },
      {
        _id: '57b589ed459adefd0c148439',
        name: '阳光旁屋',
        price: 321,
        address: '皇浦陕西南路',
        province: '上海',
        type: '单间',
        image: 'images/houseImages/09.jpg',
        __v: 0
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