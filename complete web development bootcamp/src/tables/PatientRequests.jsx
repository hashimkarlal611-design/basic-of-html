function PatientRequests() {
  return (
    <div className="container mt-5">

      <div className="card shadow">
        <div className="card-body p-4">

          <h2 className="text-center mb-4">
            Patient Medicine Requests
          </h2>

          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">

              <thead className="table-primary">
                <tr>
                  <th>Request ID</th>
                  <th>Medicine</th>
                  <th>Quantity</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>REQ-001</td>
                  <td>Panadol</td>
                  <td>2</td>
                  <td>Abbottabad</td>
                  <td>30-09-2026</td>

                  <td>
                    <span className="badge bg-warning text-dark">
                      Pending
                    </span>
                  </td>

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
                  <td>REQ-002</td>
                  <td>Augmentin</td>
                  <td>1</td>
                  <td>Mansehra</td>
                  <td>30-09-2026</td>

                  <td>
                    <span className="badge bg-success">
                      Responses Available
                    </span>
                  </td>

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
                  <td>REQ-003</td>
                  <td>Brufen</td>
                  <td>3</td>
                  <td>Abbottabad</td>
                  <td>29-09-2026</td>

                  <td>
                    <span className="badge bg-secondary">
                      Fulfilled
                    </span>
                  </td>

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

export default PatientRequests;