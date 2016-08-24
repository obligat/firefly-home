/**
 * Created by fcc on 16-8-18.
 */
import request from 'superagent';

export const requestHouseList = (city, sort)=> {
  return (dispatch)=> {
    request
      .get('/api/houses')
      .query({city})
      .query({sort})
      .end((err, res)=> {
        if (err) {
          throw err;
        } else {
          dispatch(houseList(res.body));
        }
      });
  };
};

const houseList = (houses)=> {
  return {
    type: 'RECEIVE_HOUSE_RESOURCE',
    data: houses
  };
};