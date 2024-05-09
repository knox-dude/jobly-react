import { createContext } from "react";
import { User } from "@/types";

// create type and initial value for Token
type UserType = User | null;
type LoginParams = { username: string; password: string };
type SignupParams = {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};

// set initial values for the context as [null, (anonymous function)]
const CurrUserContext = createContext<
  [
    UserType, // the current user
    () => void, // the logout function
    ({ username, password }: LoginParams) => Promise<void>, // the login function
    ({ username, firstName, lastName, password, email }: SignupParams) => Promise<void> // the signup function
  ]
>([null, () => {}, async () => {}, async () => {}]);

export default CurrUserContext;
