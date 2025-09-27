import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
          <div className="p-4">
            <h2 className="fw-bold">Welcome to the Application 🎉</h2>
            <p className="mt-3">
              We're glad to have you here. Explore and enjoy the experience!
            </p>
            <div className="text-right">
                <Link to="/signin" className="text-decoration-none text-dark" style={{ color: "#f97316" }}>Logout</Link>
            </div>
          </div>
        </>
    );
}

export default HomePage;