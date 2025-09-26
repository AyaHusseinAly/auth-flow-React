import { Link } from "react-router-dom";
import { useState } from "react";
import * as authService from "../services/authSerivce"
const SignInPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        authService.login({email, password})
    }

    return(
        <>
            <div className="card main-card rounded-4 d-flex flex-row">
                <div className="card-body card-body-left w-50 rounded-start-4">
                </div>
                <div className="card-body card-body-right w-50 rounded-end-4">

                    <div className="d-flex flex-column align-items-center justify-content-center text-light h-100">
                        <div className="logo">AMAÉ</div>
                        <div className="p-4">
                            <div className="text-center mb-4">
                                {/* <h4 className="fw-bold">Welcome Back</h4> */}
                                <p>Sign in to continue...</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                            <div className="mb-3 text-start">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input onChange={(e)=> setEmail(e.target.value)}
                                type="email" id="email" className="form-control bg-dark text-light border-0" placeholder="Enter your email" 
                            />
                            </div>
                            <div className="mb-3 text-start">
                            <div className="d-flex justify-content-between">
                            <label htmlFor="password" className="form-label">Password</label>
                            <a href="#" className="text-decoration-none" style={{ color: "#f97316", fontSize: "0.875rem" }}>Forgot password?</a>
                            </div>
                            <input onChange={(e)=> setPassword(e.target.value)}
                                type="password" id="password" className="form-control bg-dark text-light border-0" placeholder="Enter your password" 
                            />
                            </div>
                            <div className="form-check mb-3 text-start">
                            <input type="checkbox" id="remember" className="form-check-input" />
                            <label htmlFor="remember" className="form-check-label">Remember me</label>
                            </div>
                            <button type="submit" className="btn w-100" style={{ backgroundColor: "#f97316", color: "white", borderRadius: "8px" }}>Sign In</button>
                            </form>
                            <div className="text-center my-3">Or continue with</div>
                            <div className="d-flex gap-2 mb-3">
                            <button className="btn flex-fill btn-dark border-0 d-flex align-items-center justify-content-center gap-2"><i className="bi bi-google"></i> Google</button>
                            <button className="btn flex-fill btn-dark border-0 d-flex align-items-center justify-content-center gap-2"><i className="bi bi-facebook"></i> Facebook</button>
                            <button className="btn flex-fill btn-dark border-0 d-flex align-items-center justify-content-center gap-2"><i className="bi bi-apple"></i> Apple</button>
                        </div>
                        <div className="text-center">
                            <span>Don’t have an account? </span>
                            <Link to="/signup" className="text-decoration-none" style={{ color: "#f97316" }}>Sign up</Link>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}



export default SignInPage;