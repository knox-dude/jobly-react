import { useNavigate } from "react-router-dom";
import { JoblyApi } from "@/api";
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

function SignupForm() {

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.target as HTMLFormElement).username.value;
    const firstName = (event.target as HTMLFormElement).firstName.value;
    const lastName = (event.target as HTMLFormElement).lastName.value;
    const password = (event.target as HTMLFormElement).password.value;
    const email = (event.target as HTMLFormElement).email.value;

    const token = JoblyApi.signup({username, firstName, lastName, password, email});
    if (token) localStorage.setItem('jobly_token', token);

    navigate("/colors");
  }

  return (
    < Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" />
      </FormGroup>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input type="text" name="firstName" id="firstName" />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input type="text" name="lastName" id="lastName" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" />
      </FormGroup>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
}

export default SignupForm