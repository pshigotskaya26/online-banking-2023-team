import ICredit from '../types/interfaces/ICredit';

class CreditsAPI {
  getCreditsByUserId(userid: number): ICredit[] {
    const credits: ICredit[] = JSON.parse(
      localStorage.getItem('credits') ?? '[]',
    );
    return credits.filter((credit) => credit.userId === userid);
  }

  addUserCredit(newCredit: ICredit): ICredit[] {
    const credits: ICredit[] = JSON.parse(
      localStorage.getItem('credits') ?? '[]',
    );
    newCredit.id = credits.push(newCredit);
    localStorage.setItem('credits', JSON.stringify(credits));
    return credits.filter((credit) => credit.userId === newCredit.userId);
  }
}

const creditsAPI = new CreditsAPI();
export default creditsAPI;
