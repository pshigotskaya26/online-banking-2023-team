import {
  AuthUserData,
  IAdminUser,
  IClientUser,
} from '../types/interfaces/IUser';

class UserAPI {
  fetchUserInfo(credentials: AuthUserData): IClientUser | IAdminUser {
    const data = localStorage.getItem('users') ?? '[]';
    const existUsers: Array<IClientUser | IAdminUser> = JSON.parse(data);

    const user: IClientUser | IAdminUser | undefined = existUsers.find(
      (user) => user.email === credentials.login,
    );
    if (!user) {
      throw new Error('User not exist');
    }

    if (user.password !== credentials.password) {
      throw new Error('Incorrect email or password');
    }

    return user;
  }

  createUserInfo(userInfo: IClientUser | IAdminUser): IClientUser | IAdminUser {
    const data = localStorage.getItem('users') ?? '[]';
    const existUsers: Array<IClientUser | IAdminUser> = JSON.parse(data);

    const user: IClientUser | IAdminUser | undefined = existUsers.find(
      (user) => user.email === userInfo.email,
    );
    if (user) {
      throw new Error('User already exist');
    }

    userInfo.id = existUsers.push(userInfo);
    localStorage.setItem('users', JSON.stringify(existUsers));
    return userInfo;
  }
}

const authUserAPI = new UserAPI();
export default authUserAPI;
