import React, {Component} from "react";
import {isExistName} from "../actions/index";
import {connect} from "react-redux";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
  }


  handleOnBlur() {
    let userName = this.refs.name.value;
    this.props.checkUsername(userName);
    console.log(this.props.isExist);
  }

  handlerClick() {
    let userName = this.refs.name.value;
    let password = this.refs.psw.value;
    this.props.checkPassword(userName, password);

  }


  render() {

    const {isExist} = this.props;
    return (
      <div id="all" className="panel panel-default">

        <div id="head">
          <h2>萤火虫之家</h2>
        </div>

        <div id="body">
          <form>
            <div id="nameDiv" className="col-xs-5 input-group">
              <span className="input-group-addon glyphicon glyphicon-user"/>
              <input
                id="name"
                className="form-control"
                type="text"
                ref="name"
                placeholder="用户名"
                onBlur={this.handleOnBlur.bind(this)}
              />

            </div>

            <div>
              {
                isExist ? ('') : (<h1>no exist</h1>)
              }
            </div>
            <br/>
            
            <div id="passwordDiv" className="col-xs-5 input-group">
              <span className="input-group-addon glyphicon glyphicon-lock"/>
              <input
                id="password"
                className="form-control"
                type="password"
                ref="psw"
                placeholder="密码"/>
            </div>
            <div>
              <span id="errPsw"/>
            </div>
            <br/>

            <button id="login"
                    type="button"
                    className="btn btn-success">
              登录
            </button>
            <button id="cancel"
                    type="button"
                    className="btn btn-success"
                    onClick={this.handlerClick.bind(this)}>
              取消
            </button>
          </form>
          <br/>
        </div>

        <div id="footer">
          <a href="">注册新账号</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isExist: state.isExist
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    checkUsername: (username) => {
      dispatch(isExistName(username))
    },
    checkPassword: (username, password)=> {
      dispatch(isExistPassword(username, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);