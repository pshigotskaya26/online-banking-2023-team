import { IAdminUser, IClientUser } from '../types/interfaces/IUser';

class CreditsAdminAPI {
  private findCredits(): Array<any> | undefined {
    const data = localStorage.getItem('credits') ?? '[]';
    const arr: Array<any> = JSON.parse(data);
    return arr;
  }

  fetchCredits(): IClientUser[] {
    const credits = this.findCredits();
    if (!credits) {
      throw new Error('Credits not exist');
    }

    return credits;
  }
}

const creditsAdminAPI = new CreditsAdminAPI();
export default creditsAdminAPI;
