/**
 * Created by fcc on 16-8-18.
 */
import request from 'superagent';

export const requestHouseList = ()=> {
  return (dispatch)=> {
    request
      .get('/api/houses')
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

export const requestHouseOfSelectedCity = (city)=> {
  return (dispatch)=> {
    if (city) {
      request
        .get('/api/houses/city')
        .query({city})
        .end((err, res)=> {
          if (err) {
            throw err;
          } else {
            dispatch(houseOfSelectedCity(res.body));
          }
        });
    } else {
      dispatch(requestHouseList());
    }
  };
};

const houseOfSelectedCity = (houses)=> {
  return {
    type: 'HOUSE_OF_SELECTED_CITY',
    data: houses,

  };
};

export const requestSortedHouse = (city)=> {
  return (dispatch)=> {
    request
      .get('/api/houses/sorted-house')
      .query({city})
      .end((err, res)=> {
        if (err) {
          throw err;
        } else {
          dispatch(houseOfSortedByPrice(res.body));
        }
      });
  };
};

const houseOfSortedByPrice = (houses)=> {
  return {
    type: 'HOUSE_OF_SORT_BY_PRICE',
    data: houses
  }
};