# 🔐 Auth Flow React

A JWT-based authentication app with refresh tokens, device tracking, and automatic token refresh. built with React, TypeScript, and Vite

## ✨ Features

- 🔐 **Secure Authentication**: JWT access tokens with refresh token rotation
- 🛡️ **Route Protection**: Protected and public route guards
- 🔄 **Auto Token Refresh**: Automatic token refresh on expiration
- 🔒 **HttpOnly Cookies**: Secure refresh token storage
- 📱 **Device Tracking**: Unique device ID for enhanced security
- ⚡ **Fast Development**: Vite-powered with hot module replacement

## 🚀 Quick Start

### Prerequisites
- React 19.1.1 + TypeScript
- Node.js (v18 or higher)
- npm or yarn
- Backend API running (check `auth-flow-nest`)
- **Build Tool**: Vite 7.1.7

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd auth-flow-React
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_BE_BASE_URL=http://localhost:3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── AuthLayout.tsx    # Main authentication layout
│   ├── FormComponents.tsx # Form input components
│   ├── ProtectedRoute.tsx # Route guard for authenticated users
│   ├── PublicRoute.tsx   # Route guard for public pages
│   └── SsoComponent.tsx  # Social login components
├── pages/               # Application pages
│   ├── signin.tsx       # Sign in page
│   ├── signup.tsx       # Sign up page
│   └── home.tsx         # Protected home page
├── services/            # API and business logic
│   ├── api.interceptor.ts # Axios interceptor for token refresh
│   ├── apiService.ts    # HTTP API calls
│   └── authSerivce.ts   # Authentication service layer
├── store/               # State management
│   └── token-context.tsx # Authentication context
├── config/              # Configuration
│   └── constants.ts     # Environment constants
└── App.tsx              # Main application component
```

## 🔒 Security Features

### **Token Management**
- Access tokens are short-lived (15 minutes) - stored in React context
- Refresh tokens are long-lived (7 days) - stored as HttpOnly cookie
- Automatic token refresh on API calls

### **Route Protection**
- **Public Routes**: `/signin`, `/signup` (redirects authenticated users)
- **Protected Routes**: `/home` (requires authentication)

## 🎨 UI Components

### **Form Components**
- `FormInput`: Reusable input field with validation
- `PasswordInput`: Password field with strength validation
- `SubmitButton`: Styled submit button
- `AuthLink`: Navigation links between auth pages

### **Layout Components**
- `AuthLayout`: Main layout with SSO options
- `ProtectedRoute`: Route guard for authenticated users
- `PublicRoute`: Route guard for public pages


## 🔗 Related Projects

- **Backend API**: the project integrates with [auth-flow-nest](https://github.com/AyaHusseinAly/auth-flow-nest) NestJS backend and integrated with endpoints:
  - `POST /auth/signin` - User authentication
  - `POST /auth/signup` - User registration
  - `POST /auth/signout` - User logout
  - `POST /tokens/refresh` - Token refresh
  - `GET /users/profile` - User profile
