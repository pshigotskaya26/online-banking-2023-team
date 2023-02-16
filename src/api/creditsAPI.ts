import ICredit from '../types/interfaces/ICredit';

class CreditsAPI {
  getCreditsByUserId(userid: number): ICredit[] {
    const credits: ICredit[] = JSON.parse(
      localStorage.getItem('creditss') ?? '[]',
    );
    return credits.filter((credit) => credit.userId === userid);
  }
}

const creditsAPI = new CreditsAPI();
export default creditsAPI;
