/**
 * Created by zhangsha on 16-8-23.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars

export default class DaySelect extends Component{
  constructor(props){
    super(props);
    this.state = {
      days: this.createDays()
    };
  }

  createDays(){
    let days = [];
    for(let i = 1; i < 32; i++){
      days.push(i);
    }
    return days;
  }

  render(){
    let days = this.state.days;
    return (
      <select>
        {
          days.map((v, k) =>
            <option key={k}>{v}日</option>
          )
        }
      </select>
    );
  }
}
