/**
 * Created by zhangsha on 16-8-16.
 */
function checkUsername(username) {
    let pattern = /^(\w){6,16}$/;
    let pattern2 = /^[A-Za-z0-9]+$/;

    let resultOther = pattern2.test(username);
    let resultLength = pattern.test(username);

    if (!resultOther) {
        return {
            err: '用户名由数字、字母、下划线组成',
            data: ''
        }
    } else if (!resultLength) {
        return {
            err: '用户名长度不能少于6位',
            data: ''
        }
    }else{
        return {
            err:'',
            data:username
        }
    }
/*    return pattern.test(username) ? {
        err: '',
        data: username
    } : {
        err: '用户名由数字、字母、下划线组成',
        data: ''
    }*/
}


function checkPassword() {
    return {
        err: '',
        data: ''
    }
}

module.exports = {
    checkUsername,
    checkPassword
};