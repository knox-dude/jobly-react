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

  // TODO: spruce up design a bit, make it so that users can't click confirm without all fields filled in,
  // probably have to do error handling and stuff

  return (
    <div className="container">
      < Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" autoComplete="username" />
        </FormGroup>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input type="text" name="firstName" id="firstName" autoComplete="given-name"/>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input type="text" name="lastName" id="lastName" autoComplete="family-name"/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" autoComplete="new-password"/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" autoComplete="email"/>
        </FormGroup>
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  );
}

export default SignupForm