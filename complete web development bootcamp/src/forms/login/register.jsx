function Register() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6">

          <div className="card mavely-card">
            <div className="card-body p-4">

              <h2 className="text-center mb-4 mavely-title">
                Create Mavely Account
              </h2>

              <form>

                                           {/* Full Name */}
                <div className="mb-3">
                  <label className="form-label">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                                             {/* Email */}
                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                                     {/* Phone */}
                <div className="mb-3">
                  <label className="form-label">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    className="form-control"
                    placeholder="03XX-XXXXXXX"
                    minlength="11"
                    maxlength="11" 
                    pattern="[0-9]{11}" 
                    required              // Prevents Blank Submissions
                  />
                </div>

                                          {/* Password */}
                <div className="mb-3">
                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Create a password"
                    required
                  />
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label className="form-label">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                                         {/* Role */}
                <div className="mb-3">
                  <label className="form-label">
                    Register As
                  </label>

                  <select className="form-select" required>
                    <option value="">
                      Select Role
                    </option>

                    <option value="patient">
                      Patient
                    </option>

                    <option value="pharmacy">
                      Pharmacy
                    </option>
                  </select>
                </div>

                                          {/* Terms */}
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                    required
                  />

                  <label
                    className="form-check-label"
                    htmlFor="terms"
                  >
                    I agree to the terms and conditions
                  </label>
                </div>

                                           {/* Submit */}
                <button
                  type="submit"
                  className="mavely-btn w-100"
                >
                  Create Account
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;