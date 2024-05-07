import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JoblyApi } from "@/api";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import TokenContext from "../TokenContext/TokenContext";

function SignupForm() {
  const navigate = useNavigate();
  // dont need token just need setToken so don't define it here
  const [, setToken] = useContext(TokenContext);

  // get all fields and submit them to get a token - then set it in local storage
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.target as HTMLFormElement).username.value;
    const firstName = (event.target as HTMLFormElement).firstName.value;
    const lastName = (event.target as HTMLFormElement).lastName.value;
    const password = (event.target as HTMLFormElement).password.value;
    const email = (event.target as HTMLFormElement).email.value;

    try {
      if (!username || !firstName || !lastName || !password || !email) {
        throw new Error("Please fill in all fields");
      }
      // signup using JoblyApi, then set it in local storage with setToken context hook
      const newToken = await JoblyApi.signup({
        username,
        firstName,
        lastName,
        password,
        email,
      });
      // set token via contextProvider if it exists
      newToken
        ? setToken(newToken)
        : console.error("signup token something went wrong");
    } catch (error) {
      console.error(error);
      navigate("/signup");
    }

    navigate("/");
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            autoComplete="given-name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            autoComplete="family-name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" autoComplete="email" />
        </FormGroup>
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  );
}

export default SignupForm;
