function DeleteResponse() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7">

          <div className="card shadow">
            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Delete Pharmacy Response
              </h2>

              <form>

                                          {/* Response ID */}
                <div className="mb-3">
                  <label className="form-label">
                    Response ID
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter response ID"
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

                                         {/* Availability */}
                <div className="mb-3">
                  <label className="form-label">
                    Availability
                  </label>

                  <select className="form-select">
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

                                          {/* Price */}
                <div className="mb-4">
                  <label className="form-label">
                    Price
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter price in PKR"
                  />
                </div>

                                                    {/* Warning */}
                <div className="alert alert-warning">
                  Are you sure you want to delete this pharmacy
                  response?
                </div>

                                                     {/* Buttons */}
                <div className="d-flex gap-2">

                  <button
                    type="submit"
                    className="btn btn-danger"
                  >
                    Delete Response
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

export default DeleteResponse;