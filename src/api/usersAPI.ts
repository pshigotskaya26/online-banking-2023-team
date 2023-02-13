import {
  IClientUser,
} from '../types/interfaces/IUser';

class UsersAPI {
  private findUsers(): Array<IClientUser> | undefined {
    const data = localStorage.getItem('users') ?? '[]';
    const existUsers: Array<IClientUser> = JSON.parse(data);
    return existUsers;
  }

  fetchUsers(): IClientUser[] {
    const users = this.findUsers();
    if (!users) {
      throw new Error('User not exist');
    }

    return users;
  }
}

const usersAPI = new UsersAPI();
export default usersAPI;
