import { BaseJob } from './BaseJob';

export interface DetailedJob extends BaseJob {
  reference: string;
  location: string;
  industries: string[];
  types: string[];
  description: string;
  publishDate: string | Date;
}
