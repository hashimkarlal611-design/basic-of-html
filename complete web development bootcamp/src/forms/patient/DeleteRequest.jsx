function DeleteRequest() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7">

          <div className="card shadow">
            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Delete Medicine Request
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
                    placeholder="Enter request ID"
                    required
                  />
                </div>

                                          {/* Medicine */}
                <div className="mb-3">
                  <label className="form-label">
                    Medicine
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter medicine name"
                    required
                  />
                </div>

                                            {/* Quantity */}
                <div className="mb-3">
                  <label className="form-label">
                    Quantity
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter quantity"
                  />
                </div>

                                        {/* Created Date */}
                <div className="mb-3">
                  <label className="form-label">
                    Created Date
                  </label>

                  <input
                    type="date"
                    className="form-control"
                  />
                </div>

                                             {/* Status */}
                <div className="mb-4">
                  <label className="form-label">
                    Status
                  </label>

                  <select className="form-select">
                    <option value="">Select status</option>
                    <option value="pending">Pending</option>
                    <option value="responses">Responses Available</option>
                    <option value="fulfilled">Fulfilled</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                                                     {/* Confirmation */}
                <div className="alert alert-warning">
                  Are you sure you want to delete this medicine request?
                </div>

                                                 {/* Buttons */}
                <div className="d-flex gap-2">

                  <button
                    type="submit"
                    className="btn btn-danger"
                  >
                    Delete Request
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

export default DeleteRequest;