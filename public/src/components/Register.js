//eslint-disable-line max-lines
import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {createUser} from  '../actions/register';
import {withRouter} from 'react-router';
import {clearState} from '../actions/register';
import Header from './Header';
import Footer from './Footer';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameError: '',
      pwdError: '',
      confirmError: ''
    };
  }

  componentWillUpdate(nextProps) {
    if (nextProps.createUserResult === '') {
      this.props.clearState();
      this.props.router.push('/login');
    }
  }

  checkUsername() {
    let username = this.refs.username.value;
    let pattern = /^[A-Za-z0-9_|0-9A-Za-z_]+$/;
    if (!pattern.test(username)) {
      this.setState({
        nameError: '用户名必须有数字、字母、下划线组成'
      });
    }
  }

  checkPassword() {
    let password = this.refs.password.value;
    let pattern = /^.{6,16}$/;
    if (!pattern.test(password)) {
      this.setState({
        pwdError: '密码长度为6～16位'
      });
    }
  }

  checkPasswordEqual() {
    let password = this.refs.password.value;
    let confirmPassword = this.refs.confirmPassword.value;
    if (!(password === confirmPassword)) {
      this.setState({
        confirmError: '密码输入不一致'
      });
    }
  }

  handleNameFocus() {
    this.setState({
      nameError: ''
    });
  }

  handlePasswordFocus() {
    this.setState({
      pwdError: ''
    });
  }

  handleConfirmFocus() {
    this.setState({
      confirmError: ''
    });
  }

  handleClick() {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let confirmPassword = this.refs.confirmPassword.value;
    if (confirmPassword === password) {
      this.props.createUser(username, password);
    }
  }

  render() {
    const createUserResult = this.props.createUserResult;

    return (
      <div>
        <Header />
        <div className="page hidden-sm">
          <div className="data-toggle register">
            <div className="title">Welcome To Firefly Home</div>
            <div>
              <form className="form-horizontal">
                <div className="form-group">
                  <label for="inputEmail3" className="col-sm-2 control-label">Username</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="Username" ref='username'
                           onFocus={this.handleNameFocus.bind(this)} onBlur={this.checkUsername.bind(this)}/>
                    <span className="error-tip">{this.state.nameError}</span>
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password"
                           onBlur={this.checkPassword.bind(this)}
                           onFocus={this.handlePasswordFocus.bind(this)} ref="password"/>
                    <span className="error-tip">{this.state.pwdError}</span>
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3"
                           onBlur={this.checkPasswordEqual.bind(this)}
                           onFocus={this.handleConfirmFocus.bind(this)} placeholder="Please Input Password Again"
                           ref='confirmPassword'/>
                    <span className="error-tip">{this.state.confirmError}</span>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <span className="error-tip">{createUserResult}</span><br/>
                    <button
                      type="button" onClick={this.handleClick.bind(this)}>Sign in
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    createUserResult: state.createUserResult
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    createUser: (username, password)=> {
      dispatch(createUser(username, password));
    },
    clearState: () => {
      dispatch(clearState());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));