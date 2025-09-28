import { useState } from "react";
import * as authService from "../services/authSerivce";
import { FormInput, PasswordInput, SubmitButton, AuthLink } from '../components/FormComponents';
import { useAuth } from '../store/token-context'
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
    const { setAccessToken } = useAuth();
    const navigate = useNavigate();    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const responseData = await authService.login({ email, password });
        setAccessToken(responseData.accessToken);
        navigate('/home');
    }


    return (
        <>
            <div className="p-4 w-75">
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
                        onChange={(e)=> setPassword(e.target.value)}
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