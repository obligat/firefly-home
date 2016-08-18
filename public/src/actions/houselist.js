/**
 * Created by fcc on 16-8-18.
 */
import request from 'superagent';

export const requestHouseList = ()=> {
    return (dispatch)=> {
        request.get('/houses')
            .end((err, res)=> {
                dispatch(houseResource(res.body));
            });
    };
};


export const houseResource = (houses)=> {
    return {
        type: 'RECEIVE_HOUSE_RESOURCE',
        data: houses
    }
};