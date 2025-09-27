const SsoComponent = () => {
    const onGoogleClick = (e: React.FormEvent) => console.log("google btn clicked",e);
    const onFacebookClick = (e: React.FormEvent) => console.log("fb btn clicked",e);
    const onAppleClick = (e: React.FormEvent) => console.log("apple btn clicked",e);

    return (
        <>
          <div className="text-center my-3">Or continue with</div>
          <div className="d-flex gap-2 mb-3">
            <button 
              className="btn flex-fill btn-dark border-0 d-flex align-items-center justify-content-center gap-2" 
              disabled
              onClick={onGoogleClick}
            >
              <i className="bi bi-google"></i> Google
            </button>
            <button 
              className="btn flex-fill btn-dark border-0 d-flex align-items-center justify-content-center gap-2" 
              disabled
              onClick={onFacebookClick}
            >
              <i className="bi bi-facebook"></i> Facebook
            </button>
            <button 
              className="btn flex-fill btn-dark border-0 d-flex align-items-center justify-content-center gap-2" 
              disabled
              onClick={onAppleClick}
            >
              <i className="bi bi-apple"></i> Apple
            </button>
          </div>
        </>
      );
}

export default SsoComponent;
