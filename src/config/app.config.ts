interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['HR Manager', 'Employee', 'Payroll Administrator'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read job positions',
    'Read company information',
    'Read employee information',
    'Update personal user information',
  ],
  ownerAbilities: ['Manage job positions', 'Manage company information', 'Manage employee records', 'Manage payroll'],
  getQuoteUrl: 'https://app.roq.ai/proposal/c0011e88-afd8-4d50-a5d5-4ee72a09da9d',
};
