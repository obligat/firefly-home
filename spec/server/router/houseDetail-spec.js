/**
 * Created by zhangsha on 16-8-22.
 */

import supertest from 'supertest';
import app from '../../../server/routers/houseDetail';
const request = supertest(app);


// describe('post', () => {
//   it('should return house detail with name,price,type....', (done) => {
//
//     request
//       .get('/api/houseDetails/')
//
//
//   });
// });
