import type ICard from './ICard'

export default interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  secret: string;
  phone: string;
  photo: string; // base64
  card: ICard[];
}
