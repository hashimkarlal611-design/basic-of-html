function Login() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">

          <div className="card mavely-card">
            <div className="card-body p-4">

              <h2 className="text-center mb-4 mavely-title">
                Mavely Login
              </h2>

              <form>

                <div className="mb-3">
                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                                              {/* passward */}
                <div className="mb-3">
                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Login As
                  </label>

                  <select className="form-select" required>
                    <option value="">Select Role</option>
                    <option value="patient">Patient</option>
                    <option value="pharmacy">Pharmacy</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

               <button
                    type="submit"
                    className="mavely-btn w-100"
                     >
                    Login
                    </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;