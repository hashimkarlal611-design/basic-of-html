function CreatePharmacy() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-8">

          <div className="card shadow">
            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Add New Pharmacy
              </h2>

              <form>

                                              {/* Pharmacy Name */}
                <div className="mb-3">
                  <label className="form-label">
                    Pharmacy Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter pharmacy name"
                    required
                  />
                </div>

                                            {/* Owner Name */}
                <div className="mb-3">
                  <label className="form-label">
                    Owner Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter owner name"
                    required
                  />
                </div>

                                        {/* License Number */}
                <div className="mb-3">
                  <label className="form-label">
                    License / Registration Number
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter license number"
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
                    placeholder="Enter pharmacy email"
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
                    min={11}
                    max={11}
                    required
                  />
                </div>

                                        {/* City */}
                <div className="mb-3">
                  <label className="form-label">
                    City
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city"
                    required
                  />
                </div>

                                            {/* Area */}
                <div className="mb-3">
                  <label className="form-label">
                    Area
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter area"
                  />
                </div>

                                         {/* Address */}
                <div className="mb-3">
                  <label className="form-label">
                    Complete Address
                  </label>

                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Enter complete pharmacy address"
                  ></textarea>
                </div>

                                        {/* Opening Time */}
                <div className="mb-3">
                  <label className="form-label">
                    Opening Time
                  </label>

                  <input
                    type="time"
                    className="form-control"
                    required
                  />
                </div>

                                             {/* Closing Time */}
                <div className="mb-3">
                  <label className="form-label">
                    Closing Time
                  </label>

                  <input
                    type="time"
                    className="form-control"
                    required
                  />
                </div>

                                            {/* Delivery */}
                <div className="mb-3">
                  <label className="form-label">
                    Delivery Available
                  </label>

                  <select className="form-select" required>
                    <option value="">
                      Select option
                    </option>
                    <option value="yes">
                      Yes
                    </option>
                    <option value="no">
                      No
                    </option>
                  </select>
                </div>

                                            {/* Status */}
                <div className="mb-4">
                  <label className="form-label">
                    Status
                  </label>

                  <select className="form-select">
                    <option value="">
                      Select status
                    </option>
                    <option value="active">
                      Active
                    </option>
                    <option value="inactive">
                      Inactive
                    </option>
                    <option value="pending">
                      Pending
                    </option>
                  </select>
                </div>

                                                {/* Buttons */}
                <div className="d-flex gap-2">

                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Add Pharmacy
                  </button>

                  <button
                    type="reset"
                    className="btn btn-secondary"
                  >
                    Reset
                  </button>

                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CreatePharmacy;