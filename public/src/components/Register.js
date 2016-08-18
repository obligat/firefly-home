
import {Component} from 'react';
import {connect} from 'react-redux';
import {createUser} from  '../actions/register';

class SingUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  }

  handleClick() {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    this.props.createUser(username, password);
    let confirmPassword = this.refs.confirmPassword.value;
    if(password !== confirmPassword){
      this.setState({
        error: '密码输入不一致'
      });
    }
  }

  handleFocus(){
    this.setState({
      error: ''
    });
  }

  render() {
    const {createUserResult} = this.props;
    let styleObj = {
      width: 20,
      height: 30
    };

    return (
      <div className="row">
        <div className="text-center col-sm-2">
          <a href=" " className="text-center thumbnail">
            < img src='images/logo.jpg' alt="..." style={styleObj}/>
          </a >
        </div>
        <h2><strong>注册萤火虫账号</strong></h2>
        <p>&nbsp;</p >
        <p>&nbsp;</p >
        <div className="input-group ">
          <div className="input-group-addon" id="basic-addon1">
            <span className="glyphicon glyphicon-user"></span>
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" placeholder="Please input Username!" ref="username"/><br/>
            <span>{createUserResult}</span>
          </div>
        </div>
        <p>&nbsp;</p >
        <div className="input-group">
          <div className="input-group-addon" id="basic-addon1">
            <span className="glyphicon glyphicon-user"></span>
          </div>
          <div className="col-sm-4">
            <input type="password" className="form-control" placeholder="Please input Password!"
                   ref="password" onFocus={this.handleFocus.bind(this)}/>
          </div>
        </div>
        <div className="input-group">
          <div className="input-group-addon" id="basic-addon1">
            <span className="glyphicon glyphicon-user"></span>
          </div>
          <div className="col-sm-4">
            <input type="password" className="form-control" placeholder="Please input Password Again!" ref="confirmPassword"
                   onFocus={this.handleFocus.bind(this)}/><br/>
            <span>{this.state.error}</span>

          </div>
        </div>
        <p>&nbsp;</p >
          <button onClick={this.handleClick.bind(this)} type="button"
                  className="btn btn-success col-lg-offset-1 col-sm-2">立即注册
          </button>
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
export default connect(mapStateToProps, mapDispatchToProps)(SingUp);

