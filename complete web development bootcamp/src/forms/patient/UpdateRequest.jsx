function UpdateRequest() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">

          <div className="card shadow">
            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Update Medicine Request
              </h2>

              <form>

                                           {/* Request ID */}
                <div className="mb-3">
                  <label className="form-label">Request ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter request ID"
                  />
                </div>

                                             {/* Medicine Name */}
                <div className="mb-3">
                  <label className="form-label">Medicine Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter medicine name"
                    required
                  />
                </div>

                                            {/* Dosage */}
                <div className="mb-3">
                  <label className="form-label">
                    Dosage / Strength
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Example: 500mg"
                    required
                  />
                </div>

                                                 {/* Quantity */}
                <div className="mb-3">
                  <label className="form-label">Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter required quantity"
                    required
                  />
                </div>

                                                     {/* City */}
                <div className="mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your city"
                    required
                  />
                </div>

                                                 {/* Area */}
                <div className="mb-3">
                  <label className="form-label">Area</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your area"
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
                    placeholder="Enter your complete address"
                  ></textarea>
                </div>

                                             {/* Required Date */}
                <div className="mb-3">
                  <label className="form-label">
                    Required Date
                  </label>

                  <input
                    type="date"
                    className="form-control"
                  />
                </div>

                                            {/* Urgency */}
                <div className="mb-3">
                  <label className="form-label">Urgency</label>

                  <select className="form-select">
                    <option value="">Select urgency</option>
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                                             {/* Additional Notes */}
                <div className="mb-4">
                  <label className="form-label">
                    Additional Notes
                  </label>

                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Any additional information..."
                  ></textarea>
                </div>

                                                {/* Buttons */}
                <div className="d-flex gap-2">

                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Update Request
                  </button>

                  <button
                    type="reset"
                    className="btn btn-secondary"
                  >
                    Cancel
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

export default UpdateRequest;