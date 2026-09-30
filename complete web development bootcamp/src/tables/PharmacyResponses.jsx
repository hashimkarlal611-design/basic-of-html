function PharmacyResponses() {
  return (
    <div className="container mt-5">

      <div className="card shadow">
        <div className="card-body p-4">

          <h2 className="text-center mb-4">
            Pharmacy Responses
          </h2>

          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">

              <thead className="table-primary">
                <tr>
                  <th>Response ID</th>
                  <th>Medicine</th>
                  <th>Quantity</th>
                  <th>Availability</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>RES-001</td>
                  <td>Panadol</td>
                  <td>2</td>
                  <td>
                    <span className="badge bg-success">
                      In Stock
                    </span>
                  </td>
                  <td>₨500</td>
                  <td>30-09-2026</td>

                  <td>
                    <button className="btn btn-sm btn-info me-1">
                      View
                    </button>

                    <button className="btn btn-sm btn-primary me-1">
                      Edit
                    </button>

                    <button className="btn btn-sm btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>RES-002</td>
                  <td>Augmentin</td>
                  <td>1</td>
                  <td>
                    <span className="badge bg-warning text-dark">
                      Partially Available
                    </span>
                  </td>
                  <td>₨850</td>
                  <td>30-09-2026</td>

                  <td>
                    <button className="btn btn-sm btn-info me-1">
                      View
                    </button>

                    <button className="btn btn-sm btn-primary me-1">
                      Edit
                    </button>

                    <button className="btn btn-sm btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>RES-003</td>
                  <td>Brufen</td>
                  <td>3</td>
                  <td>
                    <span className="badge bg-danger">
                      Out of Stock
                    </span>
                  </td>
                  <td>₨0</td>
                  <td>29-09-2026</td>

                  <td>
                    <button className="btn btn-sm btn-info me-1">
                      View
                    </button>

                    <button className="btn btn-sm btn-primary me-1">
                      Edit
                    </button>

                    <button className="btn btn-sm btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>

              </tbody>

            </table>
          </div>

        </div>
      </div>

    </div>
  );
}

export default PharmacyResponses;