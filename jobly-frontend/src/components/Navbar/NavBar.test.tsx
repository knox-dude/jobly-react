import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

// smoke test
test("should render without issue", () => {
  render(<NavBar />);
});

// snapshot test
test("matches snapshot", function() {
  const {asFragment} = render(<NavBar />);
  expect(asFragment()).toMatchSnapshot();
});

test('renders NavBar with all links and options', () => {
  render(<NavBar />);

  expect(screen.getByText('jobly')).toBeInTheDocument();
  expect(screen.getByText('Companies')).toBeInTheDocument();
  expect(screen.getByText('Apple Company')).toBeInTheDocument();
  expect(screen.getByText('Jobs')).toBeInTheDocument();
  expect(screen.getByText('Login')).toBeInTheDocument();
  expect(screen.getByText('Signup')).toBeInTheDocument();
  expect(screen.getByText('Profile')).toBeInTheDocument();
  expect(screen.getByText('Options')).toBeInTheDocument();
  expect(screen.getByText('Option 1')).toBeInTheDocument();
  expect(screen.getByText('Option 2')).toBeInTheDocument();
  expect(screen.getByText('Reset')).toBeInTheDocument();
});
