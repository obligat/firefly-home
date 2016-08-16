/**
 * Created by zhangsha on 16-8-16.
 */
import {checkUsername} from '../public/src/register';
import {checkPassword} from '../public/src/register';

describe('checkUsername', () => {
    it('should return correct username1', () => {
        let userName = '1234_zhangsha';
        let result = checkUsername(userName);
        expect(result).toEqual({err: '', data: '1234_zhangsha'});
    });

    it('should return correct username2', () => {
        let userName = 'shiyue_123';
        let result = checkUsername(userName);
        expect(result).toEqual({err: '', data: 'shiyue_123'});
    });

    it('should return error type info', () => {
        let userName = '1234_##';
        let result = checkUsername(userName);
        expect(result).toEqual({err: '用户名由数字、字母、下划线组成', data: ''});
    });

    it('should return error type info', () => {
        let userName = '123_';
        let result = checkUsername(userName);
        expect(result).toEqual({err: '用户名长度不能少于6位且不大于16位', data: ''});
    });
});

fdescribe('checkPassword', () => {
    it('should show error message with password', () => {
        let password = '1123#45';
        let result = checkPassword(password);
        expect(result).toEqual({err: '', data: '1123#45'});
    });

    it('should show error message with password', () => {
        let password = '1123';
        let result = checkPassword(password);
        expect(result).toEqual({err: '密码长度不能少于6位', data: ''});
    })
});

describe('isEqual', () => {
    it('should return boolean with isEqual?', () => {
        let password = '123456';
        let confirmPassword = '123456';
        let result = isEqual(password, confirmPassword);
        expect(result).toEqual(true);
    });

    it('should return boolean with isEqual?', () => {
        let password = '12346';
        let confirmPassword = '123456';
        let result = isEqual(password, confirmPassword);
        expect(result).toEqual(false);
    });
});