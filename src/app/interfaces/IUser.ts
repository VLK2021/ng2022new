import {ICompany} from "./ICompany";

export interface IUser {
  id: string;
  name: string;
  company: ICompany
}
