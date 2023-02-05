import {
  AuthUserData,
  IAdminUser,
  IClientUser,
} from '../types/interfaces/IUser';

class UserAPI {
  private findUserByEmail(email: string): IClientUser | IAdminUser | undefined {
    const data = localStorage.getItem('users') ?? '[]';
    const existUsers: Array<IClientUser | IAdminUser> = JSON.parse(data);
    return existUsers.find((user) => user.email === email);
  }

  fetchUserInfo(credentials: AuthUserData): IClientUser | IAdminUser {
    const user = this.findUserByEmail(credentials.login);
    if (!user) {
      throw new Error('User not exist');
    }

    if (user.password !== credentials.password) {
      throw new Error('Incorrect email or password');
    }
    return user;
  }

  createUserInfo(userInfo: IClientUser | IAdminUser): IClientUser | IAdminUser {
    const user = this.findUserByEmail(userInfo.email);
    if (user) {
      throw new Error('User already exist');
    }

    const data = localStorage.getItem('users') ?? '[]';
    const existUsers: Array<IClientUser | IAdminUser> = JSON.parse(data);
    userInfo.id = existUsers.push(userInfo);
    localStorage.setItem('users', JSON.stringify(existUsers));
    return userInfo;
  }
}

const authUserAPI = new UserAPI();
export default authUserAPI;
