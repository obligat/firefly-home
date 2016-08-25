/**
 * Created by zhangsha on 16-8-22.
 */

import supertest from 'supertest';
import app from '../../../app';
const request = supertest(app);


describe('post', () => {
  beforeAll(()=> {
    spyOn(console, 'log');
  })
  it('should return house detail with name,price,type....', (done) => {
    let result = {
      _id: 4,
      name: '洛夫阁',
      price: 421,
      address: '高声桥北街',
      city: '北京',
      type: '单间',
      image: [ 'images/houseImages/04.jpg', 'images/houseImages/02.jpg', 'images/houseImages/03.jpg' ],
      houseDescription: '我是名游戏影视动画师，懂些美术，会点代码。现在也在做vr虚拟现实。在沿海一线城市生活过，' +
      '挣扎过最后还是逃回成都，过着没心没肺，安于现状的生活。没事约朋友聚餐，打球，徒步，看电影，唱歌，爬山，喝茶，' +
      '玩狼人杀消磨时光。热情好客，待人真诚，性格随和，喜欢老庄他们倡导的那种顺应自然，无拘无束的生活方式，梦想嘛，开一个个人工作室，' +
      '有灵感就创作，没有就去旅游，四川美景太多，想去的太多。做自己喜欢的事，比如独立小游戏或者动画片，不为名利，只为喜欢。呵呵，' +
      '有点唐僧了，总之，人是好人，屋是豪居，美得不要不要的。如果我是你，一定不错过这次低价奢华浪漫之旅。',
      situation: '迷你小单间，房间暂时只有一张床和大衣柜，以及小置物架，无线路由器就在房间内，网络很好。单间比较简单，适合要求不高的，' +
      '短期旅游出差的朋友。整栋房子是3层复式小楼，4室1厅2卫1厨，二楼有露台，三楼是小花园。，大概10平方左右，只适合一个人住，的(￣▽￣)"。厨房用品齐全可以自己做饭。' +
      '客厅里有沙发，电视，茶几，花，飘窗。房子在11楼顶楼，电梯房。小房间没空调，提供小风扇',
      __v: 0
    };

    request
      .get('/api/houseDetails/4')
      .end((err, res) => {
        if (err) {
          done.fail(err);
        } else {
          expect(result).toEqual(res.body);
          done();
        }
      });
  });
});
