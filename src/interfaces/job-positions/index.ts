import { GetQueryInterface } from 'interfaces';

export interface JobPositionsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  job_description?: string;
  salary_range?: string;
  required_experience?: string;
  job_requirements?: string;

  _count?: {};
}

export interface JobPositionsGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_description?: string;
  salary_range?: string;
  required_experience?: string;
  job_requirements?: string;
}
