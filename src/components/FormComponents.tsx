import React from 'react';

interface FormInputProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  type,
  label,
  placeholder,
  value,
  onChange,
  required = false
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
      />
    </div>
  );
};

interface PasswordInputProps extends Omit<FormInputProps, 'type'> {
  showForgotPassword?: boolean;
  onForgotPassword?: () => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  showForgotPassword = false,
  onForgotPassword
}) => {
  return (
    <div className="mb-3 text-start">
      <div className="d-flex justify-content-between">
        <label htmlFor={id} className="form-label">{label}</label>
        {showForgotPassword && (
          <a 
            href="#" 
            className="text-decoration-none" 
            style={{ color: "#f97316", fontSize: "0.875rem" }}
            onClick={(e) => {
              e.preventDefault();
              onForgotPassword?.();
            }}
          >
            Forgot password?
          </a>
        )}
      </div>
      <input
        onChange={onChange}
        type="password"
        id={id}
        className="form-control bg-dark text-light border-0"
        placeholder={placeholder}
        value={value}
        required={required}
      />
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
      <a 
        href={to} 
        className="text-decoration-none" 
        style={{ color: "#f97316" }}
      >
        {linkText}
      </a>
    </div>
  );
};
