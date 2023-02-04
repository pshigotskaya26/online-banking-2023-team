import {
  AuthUserData,
  IAdminUser,
  IClientUser,
} from '../types/interfaces/IUser';

class AuthUserAPI {
  fetchUserInfo(credentials: AuthUserData): IClientUser | IAdminUser {
    const data = localStorage.getItem(`${credentials.login}`);
    if (!data) {
      throw new Error('User not exist');
    }

    const user: IClientUser | IAdminUser = JSON.parse(data);
    if (user.password !== credentials.password) {
      throw new Error('Incorrect email or password');
    }

    return user;
  }
}

const authUserAPI = new AuthUserAPI();
export default authUserAPI;
