import { useState } from 'react';
import * as authSerivce from "../services/authSerivce";
import { FormInput, PasswordInput, SubmitButton, AuthLink } from '../components/FormComponents';

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // If confirm password doesn't match, prevent submission
    if (password !== confirmPassword) {
      (e.target as HTMLFormElement)
        .querySelector<HTMLInputElement>("#confirmPassword")
        ?.setCustomValidity("Passwords do not match");
      return;
    }
authSerivce.signup({ email, password, fullName });
  }

  return (
    <>
      <div  className="w-75">
        <div className="text-center mb-4">
          <p>Sign up to get started</p>
        </div>

        <form onSubmit={handleSubmit}>
          <FormInput
            id="name"
            type="text"
            label="Full Name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            minLength={3}
          />

          <FormInput
            id="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <PasswordInput
            id="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
 
          <PasswordInput
            id="confirmPassword"
            label="Confirm Password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            isConfirmPassword={true}
            passwordValue={password}
            required
          />

          <SubmitButton text="Sign Up" />
        </form>

        <AuthLink 
          text="Already have an account?" 
          linkText="Sign in" 
          to="/signin" 
        />
      </div>
    </>
  );
}


export default SignUpPage;