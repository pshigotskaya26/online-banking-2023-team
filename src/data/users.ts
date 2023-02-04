import { IClientUser } from '../types/interfaces/IUser';

const users: IClientUser[] = [
  {
    id: 1,
    name: 'Pavel Bazhenov',
    email: 'user@mail.ru',
    phone: '+357291324567',
    photo: '',
    cards: [1],
    type: 'Client',
    password: '123456',
  },
];

export default users;
