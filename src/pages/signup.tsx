import { useState } from 'react';
import {Link} from 'react-router-dom'
import * as authSerivce from "../services/authSerivce"
const SignUpPage = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    authSerivce.signup({email, password, fullName})
  }

  return (
      <>
        <div className="card border-0 main-card rounded-4 d-flex flex-row">
          {/* Left side image/illustration area */}
          <div className="card-body card-body-left w-50 rounded-start-4 d-none d-md-block"></div>
    
          {/* Right side form */}
          <div className="card-body card-body-right w-50 rounded-end-4">
            <div className="d-flex flex-column align-items-center justify-content-center text-light pt-4">
              <div className="logo">AMAÉ</div>
              <div>
                <div className="text-center mb-4">
                  {/* <h3 className="fw-bold">Create Account</h3> */}
                  <p>Sign up to get started</p>
                </div>
    
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 text-start">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input onChange={(e)=>setFullName(e.target.value)}
                      type="text"
                      id="name"
                      className="form-control bg-dark text-light border-0"
                      placeholder="Enter your full name"
                    />
                  </div>
    
                  <div className="mb-3 text-start">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)}
                      type="email"
                      id="email"
                      className="form-control bg-dark text-light border-0"
                      placeholder="Enter your email"
                    />
                  </div>
    
                  <div className="mb-3 text-start">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)}
                      type="password"
                      id="password"
                      className="form-control bg-dark text-light border-0"
                      placeholder="Enter your password"
                    />
                  </div>
    
                  <div className="mb-3 text-start">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="form-control bg-dark text-light border-0"
                      placeholder="Re-enter your password"
                    />
                  </div>
    
                  <button
                    type="submit"
                    className="btn w-100"
                    style={{ backgroundColor: "#f97316", color: "white", borderRadius: "8px" }}
                  >
                    Sign Up
                  </button>
                </form>
    
                <div className="text-center my-3">Or continue with</div>
                <div className="d-flex gap-2 mb-3">
                  <button className="btn flex-fill btn-dark border-0 d-flex align-items-center justify-content-center gap-2" disabled>
                    <i className="bi bi-google"></i> Google
                  </button>
                  <button className="btn flex-fill btn-dark border-0 d-flex align-items-center justify-content-center gap-2" disabled>
                    <i className="bi bi-facebook"></i> Facebook
                  </button>
                  <button className="btn flex-fill btn-dark border-0 d-flex align-items-center justify-content-center gap-2" disabled>
                    <i className="bi bi-apple"></i> Apple
                  </button>
                </div>
    
                <div className="text-center">
                  <span>Already have an account? </span>
                  <Link to="/signin" className="text-decoration-none" style={{ color: "#f97316" }}>
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
      
}


export default SignUpPage;