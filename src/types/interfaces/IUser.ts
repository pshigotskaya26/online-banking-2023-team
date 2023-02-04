interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  photo: string; // base64
  type: 'Client' | 'Admin';
  password: string;
}

export interface UserCredentials {
  password: string;
  secret: string;
}

export interface IClientUser extends IUser {
  cards: number[]; //cardids
}

export interface IAdminUser extends IUser {
  roles: string[];
}

export interface AuthUserData {
  login: string;
  password: string;
}
