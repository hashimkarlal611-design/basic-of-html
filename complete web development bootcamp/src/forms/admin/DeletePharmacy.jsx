function DeletePharmacy() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7">

          <div className="card shadow">
            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Delete Pharmacy
              </h2>

              <form>

                                          {/* Pharmacy ID */}
                <div className="mb-3">
                  <label className="form-label">
                    Pharmacy ID
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter pharmacy ID"
                    required
                  />
                </div>

                                                {/* Pharmacy Name */}
                <div className="mb-3">
                  <label className="form-label">
                    Pharmacy
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter pharmacy name"
                    required
                  />
                </div>

                                            {/* Owner */}
                <div className="mb-3">
                  <label className="form-label">
                    Owner
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter owner name"
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
                    required
                  />
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

                                                     {/* Warning */}
                <div className="alert alert-danger">
                  Are you sure you want to delete this pharmacy?
                  This action cannot be undone.
                </div>

                                                 {/* Buttons */}
                <div className="d-flex gap-2">

                  <button
                    type="submit"
                    className="btn btn-danger"
                  >
                    Delete Pharmacy
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

export default DeletePharmacy;