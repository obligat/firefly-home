/**
 * Created by zhangsha on 16-8-16.
 */
function checkUsername(username) {
  let lengthPattern = /^(\w){6,16}$/;
  let otherPattern = /^[A-Za-z0-9_|0-9A-Za-z_]+$/;

  let isLeagalLength = lengthPattern.test(username);
  let isContainsOthers = otherPattern.test(username);


  if (!isContainsOthers) {
    return {
      err: '用户名由数字、字母、下划线组成',
      data: ''
    }
  } else if (!isLeagalLength) {
    return {
      err: '用户名长度不能少于6位且不大于16位',
      data: ''
    }
  }

  return {
    err: '',
    data: username
  };
}


function checkPassword(password) {
  let lengthPattern = password.length;

  return lengthPattern >= 6 ? {
    err: '',
    data: password
  } : {
    err: '密码长度不能少于6位',
    data: ''
  }
}

module.exports = {
  checkUsername,
  checkPassword
};