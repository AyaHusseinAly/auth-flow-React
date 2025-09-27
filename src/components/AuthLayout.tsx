import { Outlet } from 'react-router-dom';
import SsoComponent from './SsoComponent';

const AuthLayout = () => {
  return (
    <div className="card border-0 main-card rounded-4 d-flex flex-row">
      {/* Left side image/illustration area */}
      <div className="card-body card-body-left w-50 rounded-start-4 d-none d-md-block"></div>
      
      {/* Right side content */}
      <div className="card-body card-body-right w-50 rounded-end-4">
        <div className="d-flex flex-column align-items-center justify-content-center text-light h-100">
          <div className="logo">AMAÉ</div>
            <Outlet/>
            <SsoComponent/>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
