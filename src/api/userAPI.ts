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

  private findUserByID(id: number): IClientUser | IAdminUser | undefined {
    const data = localStorage.getItem('users') ?? '[]';
    const existUsers: Array<IClientUser | IAdminUser> = JSON.parse(data);
    return existUsers.find((user) => user.id === id);
  }

  fetchUserInfo(credentials: AuthUserData): IClientUser | IAdminUser {
    const user = this.findUserByEmail(credentials.login);
    if (!user) {
      throw new Error('User not exist');
    }

    if (user.password !== credentials.password) {
      throw new Error('Incorrect email or password');
    }

    localStorage.setItem(
      'activeUserSession',
      JSON.stringify({ id: user.id, ts: Date.now() }),
    );

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

  addServiceToFavorites(
    userid: number,
    serviceid: number,
  ): IClientUser | IAdminUser {
    const data = localStorage.getItem('users') ?? '[]';
    const existUsers: Array<IClientUser | IAdminUser> = JSON.parse(data);
    const targetUser = existUsers.find((user) => user.id === userid);
    if (!targetUser) {
      throw new Error('User not exist');
    }

    targetUser.favoriteServices.push(serviceid);
    localStorage.setItem('users', JSON.stringify(existUsers));
    return targetUser;
  }

  removeServiceFromFavorites(
    userid: number,
    serviceid: number,
  ): IClientUser | IAdminUser {
    const data = localStorage.getItem('users') ?? '[]';
    const existUsers: Array<IClientUser | IAdminUser> = JSON.parse(data);
    const targetUser = existUsers.find((user) => user.id === userid);
    if (!targetUser) {
      throw new Error('User not exist');
    }

    targetUser.favoriteServices = targetUser.favoriteServices.filter(
      (sid) => sid !== serviceid,
    );
    localStorage.setItem('users', JSON.stringify(existUsers));
    return targetUser;
  }

  updateSession(userid: number): void {
    localStorage.setItem(
      'activeUserSession',
      JSON.stringify({ id: userid, ts: Date.now() }),
    );
  }

  logoutSystem(): null {
    localStorage.removeItem('activeUserSession');
    return null;
  }

  fetchUserInfoByID(id: number): IClientUser | IAdminUser {
    const user = this.findUserByID(id);
    if (!user) {
      throw new Error('User not exist');
    }
    return user;
  }
}

const authUserAPI = new UserAPI();
export default authUserAPI;
