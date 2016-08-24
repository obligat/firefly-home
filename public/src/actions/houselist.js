/**
 * Created by fcc on 16-8-18.
 */
import request from 'superagent';

export const requestHouseList = ()=> {
  return (dispatch)=> {
    request
      .get('/api/houses')
      .end((err, res)=> {
        dispatch(houseList(res.body));
      });
  };
};

export const requestHouseOfSelectedCity = (city)=> {
  return (dispatch)=> {
    if (city) {
      request
        .get('/api/houses/city')
        .query({city})
        .end((err, res)=> {
          dispatch(houseOfSelectedCity(res.body));
        });
    } else {
      dispatch(requestHouseList());
    }
  };
};

const houseList = (houses)=> {
  return {
    type: 'RECEIVE_HOUSE_RESOURCE',
    data: houses
  };
};

const houseOfSelectedCity = (houses)=> {
  return {
    type: 'HOUSE_OF_SELECTED_CITY',
    data: houses,

  };
};