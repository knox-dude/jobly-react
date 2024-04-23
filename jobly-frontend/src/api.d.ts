import { Company } from "@/types";

declare module "@/api" {
  class JoblyApi {
    static token: string;

    static async getCompanies(): Promise<Company[]>;
    static async getCompany(handle: string): Promise<Company>;
    static async searchCompanies(company: string): Promise<Company[]>;
  }
}
