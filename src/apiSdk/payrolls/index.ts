import queryString from 'query-string';
import { PayrollInterface, PayrollGetQueryInterface } from 'interfaces/payroll';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPayrolls = async (query?: PayrollGetQueryInterface): Promise<PaginatedInterface<PayrollInterface>> => {
  return fetcher('/api/payrolls', {}, query);
};

export const createPayroll = async (payroll: PayrollInterface) => {
  return fetcher('/api/payrolls', { method: 'POST', body: JSON.stringify(payroll) });
};

export const updatePayrollById = async (id: string, payroll: PayrollInterface) => {
  return fetcher(`/api/payrolls/${id}`, { method: 'PUT', body: JSON.stringify(payroll) });
};

export const getPayrollById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/payrolls/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deletePayrollById = async (id: string) => {
  return fetcher(`/api/payrolls/${id}`, { method: 'DELETE' });
};
