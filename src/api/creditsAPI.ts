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

  updateCredits(newCredits: ICredit[]): ICredit[] {
    const credits: ICredit[] = JSON.parse(
      localStorage.getItem('credits') ?? '[]',
    );
    const newCreditList = credits
      .filter((credit) => newCredits.every((cd) => cd.id !== credit.id))
      .concat(newCredits);
    localStorage.setItem('credits', JSON.stringify(newCreditList));
    return newCredits;
  }
}

const creditsAPI = new CreditsAPI();
export default creditsAPI;
