import { useState } from "react";
import * as authService from "../services/authSerivce";
import { FormInput, PasswordInput, SubmitButton, AuthLink } from '../components/FormComponents';

const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        authService.login({ email, password });
    }

    const handleForgotPassword = () => {
        // Add forgot password logic here
        console.log("Forgot password clicked");
    }

    return (
        <>
            <div className="p-4">
                <div className="text-center mb-4">
                    <p>Sign in to continue...</p>
                </div>
                
                <form onSubmit={handleSubmit}>
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
                        showForgotPassword={true}
                        onForgotPassword={handleForgotPassword}
                        required
                    />

                    <SubmitButton text="Sign In" />
                </form>
                                
                <AuthLink 
                    text="Don't have an account?" 
                    linkText="Sign up" 
                    to="/signup" 
                />
            </div>
        </>
    );
}



export default SignInPage;