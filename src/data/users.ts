import { IClientUser } from '../types/interfaces/IUser';
import UserRolesEnum from '../types/enums/UserRolesEnum';

const users: IClientUser[] = [
  {
    id: 1,
    name: 'Pavel Bazhenov',
    email: 'user@mail.ru',
    phone: '+357291324567',
    photo: '',
    cards: [1],
    role: UserRolesEnum.CLIENT,
    password: '123456',
  },
];

export default users;
