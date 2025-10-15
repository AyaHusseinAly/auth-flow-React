import { Outlet } from 'react-router-dom';
import SsoComponent from './SsoComponent';
// import bg from '../assets/bg-img1.jpg';

const AuthLayout = () => {
  return (
    <div className="card border-0 main-card rounded-4 d-flex flex-row">

      <div className="card-body card-body-left w-50 rounded-start-4 d-none d-md-block"   
        style={{
          backgroundImage: "url('/bg-img1.JPG')",
          backgroundRepeat: "no-repeat",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      

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
