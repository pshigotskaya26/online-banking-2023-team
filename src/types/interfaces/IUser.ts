export default interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  secret: string;
  phone: string;
  photo: string; // base64
  cards: number[]; //cardids
}
