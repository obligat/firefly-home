/**
 * Created by zhangsha on 16-8-23.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars

export default class MonthSelect extends Component{
  constructor(props){
    super(props);
    this.state = {
      months: this.createMonth()
    };
  }

  createMonth(){
    let months = [];
    for(let i = 1; i < 13; i++){
      months.push(i);
    }
    return months;
  }

  render(){
    let months = this.state.months;

    return (
      <select>
        {
          months.map((v, k) =>
            <option key={k}>{v}月</option>
          )
        }
      </select>

    );
  }
}
