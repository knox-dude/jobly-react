export interface Company {
  handle: string;
  name: string;
  description: string;
  numEmployees?: number;
  logoUrl?: string;
  jobs?: Job[];
}

export interface Job {
  id: number;
  title: string;
  salary?: number;
  equity?: number;
  companyHandle?: string;
  companyName?: string;
  company?: Company;
}
