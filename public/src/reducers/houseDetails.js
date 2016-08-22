/**
 * Created by zhangsha on 16-8-22.
 */
export const houseDetails = (state = {}, action) => {
  switch (action.type){
  case 'RECEIVE_HOUSE':
    return action.detail;
  default:
    return state;
  }
};
