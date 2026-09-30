function PharmacyManagement() {
  return (
    <div className="container mt-5">

      <div className="card shadow">
        <div className="card-body p-4">

          <h2 className="text-center mb-4">
            Pharmacy Management
          </h2>

          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">

              <thead className="table-primary">
                <tr>
                  <th>Pharmacy ID</th>
                  <th>Pharmacy</th>
                  <th>Owner</th>
                  <th>Phone</th>
                  <th>Area</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>PHA-001</td>
                  <td>City Medical Store</td>
                  <td>Ali Khan</td>
                  <td>0300-1234567</td>
                  <td>Mandian</td>

                  <td>
                    <span className="badge bg-success">
                      Active
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
                  <td>PHA-002</td>
                  <td>Health Plus Pharmacy</td>
                  <td>Ahmed Raza</td>
                  <td>0312-7654321</td>
                  <td>Jinnahabad</td>

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
                  <td>PHA-003</td>
                  <td>MediCare Pharmacy</td>
                  <td>Usman Ali</td>
                  <td>0333-9876543</td>
                  <td>Supply</td>

                  <td>
                    <span className="badge bg-secondary">
                      Inactive
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

export default PharmacyManagement;