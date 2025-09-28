import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FormInputProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  minLength?: number
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  type,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  minLength = 0

}) => {
  return (
    <div className="mb-3 text-start">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        onChange={onChange}
        type={type}
        id={id}
        className="form-control bg-dark text-light border-0"
        placeholder={placeholder}
        value={value}
        required={required}
        minLength={minLength}
      />
    </div>
  );
};

interface PasswordInputProps extends Omit<FormInputProps, 'type'> {
  isConfirmPassword?: boolean,
  passwordValue?: string
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  isConfirmPassword = false,
  passwordValue= ""
}) => {
  const [error, setError] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    // regex for: - at least 8 chars  - at least 1 letter  - at least 1 number - at least 1 special character
    if(!isConfirmPassword){
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(e.target.value)) {
        setError("Password must be at least 8 characters, include a letter, a number, and a special character.");
      } else {
        setError("");
      }
    }else{
      if (passwordValue !== e.target.value) {
        setError("Passwords do not match");
      }else{
        setError("");
      }
    }
};

  return (
    <div className="mb-3 text-start">
      <div className="d-flex justify-content-between">
        <label htmlFor={id} className="form-label">{label}</label>
          {!isConfirmPassword && (<Link
            to={"#"}
            className="text-decoration-none disabled-link"
            style={{ color: "#f97316", fontSize: "0.875rem" }}
          >
            Forgot password?
          </Link>)}
      
      </div>
      <input
        onChange={handlePasswordChange}
        type="password"
        id={id}
        className="form-control bg-dark text-light border-0"
        placeholder={placeholder}
        value={value}
        required={required}
        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).+$"
        title="Password must be at least 8 characters, include a letter, a number, and a special character."
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

interface SubmitButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  text,
  onClick,
  disabled = false,
  className = ""
}) => {
  return (
    <button
      type="submit"
      className={`btn w-100 ${className}`}
      style={{ backgroundColor: "#f97316", color: "white", borderRadius: "8px" }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

interface AuthLinkProps {
  text: string;
  linkText: string;
  to: string;
}

export const AuthLink: React.FC<AuthLinkProps> = ({ text, linkText, to }) => {
  return (
    <div className="text-center">
      <span>{text} </span>
      <Link 
        to={to} 
        className="text-decoration-none" 
        style={{ color: "#f97316" }}
      >
        {linkText}
      </Link>
    </div>
  );
};
