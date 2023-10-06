import queryString from 'query-string';
import { VacationInterface, VacationGetQueryInterface } from 'interfaces/vacation';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVacations = async (
  query?: VacationGetQueryInterface,
): Promise<PaginatedInterface<VacationInterface>> => {
  return fetcher('/api/vacations', {}, query);
};

export const createVacation = async (vacation: VacationInterface) => {
  return fetcher('/api/vacations', { method: 'POST', body: JSON.stringify(vacation) });
};

export const updateVacationById = async (id: string, vacation: VacationInterface) => {
  return fetcher(`/api/vacations/${id}`, { method: 'PUT', body: JSON.stringify(vacation) });
};

export const getVacationById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/vacations/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteVacationById = async (id: string) => {
  return fetcher(`/api/vacations/${id}`, { method: 'DELETE' });
};
