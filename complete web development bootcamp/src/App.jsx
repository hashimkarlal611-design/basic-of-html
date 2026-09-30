import Login from "./forms/login/login";
import Register from "./forms/login/register";
import CreateRequest from './forms/patient/CreateRequest';
import UpdateRequest from "./forms/patient/UpdateRequest";
import DeleteRequest from "./forms/patient/DeleteRequest";
import CreateResponse from "./forms/pharmacy/CreateResponse";
import UpdateResponse from "./forms/pharmacy/UpdateResponse";
import DeleteResponse from "./forms/pharmacy/DeleteResponse";
import CreatePharmacy from "./forms/admin/CreatePharmacy";
import UpdatePharmacy from "./forms/admin/UpdatePharmacy";
import DeletePharmacy from "./forms/admin/DeletePharmacy";

import PatientRequests from "./tables/PatientRequests";
import PharmacyResponses from "./tables/PharmacyResponses";
import PharmacyManagement from "./tables/PharmacyManagement";

function App() {
  return (
    <>
      {/* <Login/> */}
      {/* <Register /> */}

      {/* <CreateRequest /> */}
      {/* <UpdateRequest /> */}
      {/* <DeleteRequest /> */}

      {/* <CreateResponse /> */}
      {/* <UpdateResponse /> */}
      {/* <DeleteResponse /> */}

      {/* <CreatePharmacy /> */}
      {/* <UpdatePharmacy /> */}
      {/* <DeletePharmacy /> */}


       {/* <PatientRequests /> */}
       {/* <PharmacyResponses /> */}
       <PharmacyManagement />

    </>
  );
}

export default App;