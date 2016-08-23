/**
 * Created by zhangsha on 16-8-16.
 */

const checkUsername = (username) => {
  return (/^[A-Za-z0-9_|0-9A-Za-z_]+$/).test(username);
};

const checkPassword = (password) => {
  return (/^.{6,16}$/).test(password);
};

describe('checkUsername', () => {
  it('should return correct username1', () => {
    let userName = '1234_zhangsha';
    let result = checkUsername(userName);
    expect(result).toEqual(true);
  });

  it('should return correct username2', () => {
    let userName = 'shiyue_123';
    let result = checkUsername(userName);
    expect(result).toEqual(true);
  });

  it('should return error type info', () => {
    let userName = '1234_##';
    let result = checkUsername(userName);
    expect(result).toEqual(false);
  });
});


describe('checkPassword', () => {
  it('should show error message with password', () => {
    let password = '1123#45';
    let result = checkPassword(password);
    expect(result).toEqual(true);
  });

  it('should show error message with password', () => {
    let password = '1123';
    let result = checkPassword(password);
    expect(result).toEqual(false);
  });
});

