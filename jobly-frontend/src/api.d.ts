import { Company, Job, User } from "@/types";

type UserProfileData = Partial<{
  firstName: string | null;
  lastName: string | null;
  password: string | null;
  email: string | null;
  isAdmin: boolean | null;
}>;

declare module "@/api" {
  class JoblyApi {
    static token: string | null;

    static async getCompanies(): Promise<Company[]>;
    static async getCompany(handle: string): Promise<Company>;
    static async searchCompanies(company: string): Promise<Company[]>;
    static async getJobs(): Promise<Job[]>;
    static async getJob(id: string): Promise<Job>;
    static async searchJobs(title: string): Promise<Job[]>;
    static async signup({username: string, firstName: string, lastName: string, password: string, email: string}): Promise<string | null>;
    static async login({username: string, password: string}): Promise<string | null>;
    static logout(); // no request calls or db calls, so not async
    static async getUser(username: string): Promise<User>;
    static async updateUser(username:string, data:UserProfileData): Promise<User>;
  }
}
