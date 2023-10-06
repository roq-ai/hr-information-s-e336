import queryString from 'query-string';
import { JobPositionsInterface, JobPositionsGetQueryInterface } from 'interfaces/job-positions';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getJobPositions = async (
  query?: JobPositionsGetQueryInterface,
): Promise<PaginatedInterface<JobPositionsInterface>> => {
  return fetcher('/api/job-positions', {}, query);
};

export const createJobPositions = async (jobPositions: JobPositionsInterface) => {
  return fetcher('/api/job-positions', { method: 'POST', body: JSON.stringify(jobPositions) });
};

export const updateJobPositionsById = async (id: string, jobPositions: JobPositionsInterface) => {
  return fetcher(`/api/job-positions/${id}`, { method: 'PUT', body: JSON.stringify(jobPositions) });
};

export const getJobPositionsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/job-positions/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteJobPositionsById = async (id: string) => {
  return fetcher(`/api/job-positions/${id}`, { method: 'DELETE' });
};
