import { Company } from "@/types";

declare module "@/api" {
  class JoblyApi {
    static token: string;

    static async getCompanies(): Promise<Company[]>;
    static async getCompany(handle: string): Promise<Company>;
    static async searchCompanies(company: string): Promise<Company[]>;
    static async getJobs(): Promise<Job[]>;
    static async getJob(id: string): Promise<Job>;
    static async searchJobs(title: string): Promise<Job[]>;
    static async signup({username: string, firstName: string, lastName: string, password: string, email: string});
    static async login({username: string, password: string});
    static async logout();
  }
}
