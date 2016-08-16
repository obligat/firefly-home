
import React, {Component} from 'react';

export default class Body extends Component{
    constructor(props){
        super(props);
        this.state = {
            src: "images/room1.jpg"
        }
    }
    handleClick(e){
            this.setState({
                src: e.target.src
            })
    }

    render(){
        return (
            <div>
                <span className="title-span">清新甜美，适合女生的单身公寓</span><br/>
                <div>
                    <a href = "#" >萤火虫</a><span>></span><a href="#">上海</a>>上海市虹口地区
                </div>
                <img src={this.state.src} className="room1-picture"/>
                <div className="body-right">
                    <span>￥148/每晚</span>
                </div>
                <div className="preview">
                    <img src="images/room1.jpg" className="room" onClick={this.handleClick.bind(this)}/>
                    <img src="images/room2.jpg" className="room" onClick={this.handleClick.bind(this)}/>
                    <img src="images/room3.jpg" className="room" onClick={this.handleClick.bind(this)}/>
                    <img src="images/room4.jpg" className="room" onClick={this.handleClick.bind(this)}/>
                    <img src="images/room5.jpg" className="room" onClick={this.handleClick.bind(this)}/>
                    <img src="images/room6.jpg" className="room" onClick={this.handleClick.bind(this)}/>
                </div>

            </div>
        );
    }
}
