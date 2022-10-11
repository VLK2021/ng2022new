import {ICompany} from "./ICompany";

export interface IUserDetails {
  id: number;
  name: string;
  username: string;
  email: string;
  company: ICompany;
}
