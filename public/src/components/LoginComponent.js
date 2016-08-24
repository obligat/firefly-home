import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {isExistName, checkPassword} from '../actions/login';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router';
import Header from './Header';
import Footer from './Footer';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
  }


  handleOnBlur() {
    let userName = this.refs.name.value;
    this.props.checkUsername(userName);
  }

  handlerClick() {
    let userName = this.refs.name.value;
    let password = this.refs.psw.value;
    this.props.checkPassword(userName, password);

  }

  componentWillUpdate(nextProps) {

    if (!nextProps.loginMessage.error && nextProps.isExist) {
      this.props.router.push('/houseResource');
    }
  }


  render() {

    const {isExist, loginMessage} = this.props;
    return (
      <div>
        <Header />
        <div className="page hidden-sm">
          <div className="data-toggle register">
            <div className="title">Welcome To Firefly Home</div>
            <div id="body">
              <form>
                <div id="nameDiv" className="col-xs-9 input-group">
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

                <div id="errNameDiv">
                  {
                    isExist ? ('') : (<span id="errName">用户未注册</span>)
                  }<br/>
                </div>


                <div id="passwordDiv" className="col-xs-9 input-group">
                  <span className="input-group-addon glyphicon glyphicon-lock"/>
                  <input
                    id="password"
                    className="form-control"
                    type="password"
                    ref="psw"
                    placeholder="密码"/>
                </div>
                <div id="errPswDiv">{
                  loginMessage.error ? (<span id="errPsw">{loginMessage.message}</span>) : ('')
                }<br/>
                </div>


                <button id="login"
                        type="button"
                        className="btn col-xm-3"
                        onClick={this.handlerClick.bind(this)}>
                  <strong>登录</strong>
                </button>

              </form>
              <br/>
            </div>

            <div id="footer">
              <Link id='loginToRegister' to="/register">注册新账号</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isExist: state.isExist,
    loginMessage: state.loginMessage
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    checkUsername: (username) => {
      dispatch(isExistName(username));
    },
    checkPassword: (username, password)=> {
      dispatch(checkPassword(username, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginComponent));
