import { Company } from "@/types";

declare module "@/api" {
  class JoblyApi {
    static token: string;

    static getCompanies(): Company[];
    static getCompany(handle: string): Company | Error;
  }

  interface Error {
    message: string;
    status: number;
  }
}
