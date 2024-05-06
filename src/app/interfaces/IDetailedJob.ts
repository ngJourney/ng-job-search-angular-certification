import { IBaseJob } from './IBaseJob';

export interface IDetailedJob extends IBaseJob {
  reference: string;
  location: string;
  industries: string[];
  types: string[];
  description: string;
  publishDate: string | Date;
}
