import {
  IAdminUser,
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

  handleDisableOperationUser(id: number): (IClientUser | IAdminUser)[] {
    const users: (IClientUser | IAdminUser)[] = JSON.parse(localStorage.getItem('users') ?? '[]');
    const newUsers = users.map(el => el.id === id
      ? { ...el, isDisabledOperations: !el.isDisabledOperations }
      : el,
    );
    localStorage.setItem('users', JSON.stringify(newUsers));
    return users;
  }

}

const usersAPI = new UsersAPI();
export default usersAPI;
