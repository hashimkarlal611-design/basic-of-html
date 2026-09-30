function CreateResponse() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">

          <div className="card shadow">
            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Create Pharmacy Response
              </h2>

              <form>

                {/* Request ID */}
                <div className="mb-3">
                  <label className="form-label">
                    Request ID
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter patient request ID"
                    required
                  />
                </div>

                {/* Medicine Name */}
                <div className="mb-3">
                  <label className="form-label">
                    Medicine Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter medicine name"
                    required
                  />
                </div>

                {/* Requested Quantity */}
                <div className="mb-3">
                  <label className="form-label">
                    Requested Quantity
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter requested quantity"
                  />
                </div>

                {/* Availability */}
                <div className="mb-3">
                  <label className="form-label">
                    Availability
                  </label>

                  <select className="form-select" required>
                    <option value="">
                      Select availability
                    </option>
                    <option value="in-stock">
                      In Stock
                    </option>
                    <option value="partial">
                      Partially Available
                    </option>
                    <option value="out-of-stock">
                      Out of Stock
                    </option>
                  </select>
                </div>

                {/* Available Quantity */}
                <div className="mb-3">
                  <label className="form-label">
                    Available Quantity
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter available quantity"
                  />
                </div>

                {/* Price */}
                <div className="mb-3">
                  <label className="form-label">
                    Price
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter price in PKR"
                    required
                  />
                </div>

                {/* Pickup */}
                <div className="mb-3">
                  <label className="form-label">
                    Pickup Available
                  </label>

                  <select className="form-select" required>
                    <option value="">
                      Select option
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
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
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* Delivery Time */}
                <div className="mb-3">
                  <label className="form-label">
                    Estimated Delivery Time
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Example: 30 minutes"
                    required
                  />
                </div>

                {/* Pharmacy Message */}
                <div className="mb-4">
                  <label className="form-label">
                    Pharmacy Message
                  </label>

                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Enter any additional information..."
                  ></textarea>
                </div>

                {/* Buttons */}
                <div className="d-flex gap-2">

                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit Response
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

export default CreateResponse;