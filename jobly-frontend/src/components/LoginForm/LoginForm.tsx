import { useNavigate } from "react-router-dom";
import { JoblyApi } from "@/api";
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useContext } from "react";
import TokenContext from "../TokenContext/TokenContext";

function LoginForm() {

  const navigate = useNavigate();
  // dont need token just need setToken so don't define it here
  const [, setToken] = useContext(TokenContext);

  // get login fields and submit them  - then set token in local storage
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.target as HTMLFormElement).username.value;
    const password = (event.target as HTMLFormElement).password.value;

    try {
      if (!username || !password) {
        throw new Error("Please fill in all fields");
      }
      // login using JoblyApi, then set it in local storage with setToken context hook
      const newToken = await JoblyApi.login({
        username,
        password,
      });
      // set token via contextProvider if it exists
      newToken
        ? setToken(newToken)
        : console.error("login token something went wrong");
    } catch (error) {
      console.error(error);
      navigate("/login");
    }
    navigate("/");
  }

  return (
    <div className="container">
      < Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" autoComplete="username" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" autoComplete="current-password" />
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}

export default LoginForm