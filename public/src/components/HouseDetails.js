/**
 * Created by zhangsha on 16-8-22.
 */
import react, {Component} from 'react';


export default class HouseDetails extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="header" >
        <div className="left">
          <span><strong>萤火虫 </strong>居住自由主义</span>
        </div>
        <div className="right">
          <span><a href="#">登录</a></span>
          <span>短租指南</span>
          <div className="issue-room"><a href="#">免费发布房间</a></div>
        </div>
      </div>
    );
  }
}