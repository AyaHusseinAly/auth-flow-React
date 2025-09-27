import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <>
          <div className="card border-0 main-card rounded-4 d-flex flex-row">
            {/* Left side image/illustration area */}
            <div className="card-body card-body-left w-50 rounded-start-4 d-none d-md-block"></div>
      
            {/* Right side welcome section */}
            <div className="card-body card-body-right w-50 rounded-end-4">
              <div className="d-flex flex-column align-items-center justify-content-center text-light text-center h-100">
                <div className="logo">AMAÉ</div>

                <div className="p-4">
                  <h2 className="fw-bold">Welcome to the Application 🎉</h2>
                  <p className="mt-3">
                    We're glad to have you here. Explore and enjoy the experience!
                  </p>
                  <div className="text-right">
                      <Link to="/signin" className="text-decoration-none" style={{ color: "#f97316" }}>Logout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
      
}

export default HomePage;