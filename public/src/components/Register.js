import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {createUser} from  '../actions/register';
import {withRouter} from 'react-router';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
  }

  componentWillUpdate(nextProps) {
    if (nextProps.createUserResult === '') {
      this.props.router.push('/login');
    }
  }

  handleFocus() {
    this.setState({
      error: ''
    });

  }

  handleClick() {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let confirmPassword = this.refs.confirmPassword.value;
    if (password != confirmPassword) {
      this.setState({
        error: '密码输入不一致'
      });
    } else {
      this.props.createUser(username, password);
    }
  }

  render() {
    const {createUserResult} = this.props;

    return (
      <div className="page">
        <div className="data-toggle register">
          <div className="title">Welcome To Firefly Home</div>
          <div>
            <form className="form-horizontal">
              <div className="form-group">
                <label for="inputEmail3" className="col-sm-2 control-label">Username</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="inputEmail3" placeholder="Username" ref='username'/>
                  <span>{createUserResult}</span>


                </div>
              </div>
              <div className="form-group">
                <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword3" placeholder="Password"
                         onFocus={this.handleFocus.bind(this)}
                         ref="password"/>
                </div>
              </div>
              <div className="form-group">
                <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword3"
                         onFocus={this.handleFocus.bind(this)}
                         placeholder="Please Input Password Again"
                         ref='confirmPassword'/>
                  <span>{this.state.error}</span>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button
                    type="button"
                    onClick={this.handleClick.bind(this)}>
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));

