import "./dashboard.css";
import MainLayout from "../../layouts/MainLayout";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <MainLayout>
        <center>
            <h1>Hello  !!</h1>
        </center>
      
      <br />
      </MainLayout>
      <div className="dash">
      <div className="container mt-5 d-flex justify-content-center">
      <button className="btn-func" onClick={() => navigate("/posts")}>
        Package Management
      </button>

      <button className="btn-func" onClick={() => navigate("/services")}>
      Service Management
      </button>

      <button className="btn-func" onClick={() => navigate("/posts")}>
      Schedule Management
      </button>

      <button className="btn-func" onClick={() => navigate("/posts")}>
      Finance Management
      </button>

      </div>

      <br />

      <div className="container mt-5 d-flex justify-content-center">
      <button className="btn-func" onClick={() => navigate("/posts")}>
      Appointment Management
      </button>

      <button className="btn-func" onClick={() => navigate("/posts")}>
      Inventory Management
      </button>

      <button className="btn-func" onClick={() => navigate("/posts")}>
      Supplier Management
      </button>

      <button className="btn-func" onClick={() => navigate("/posts")}>
      Employee Management
      </button>
      
      </div>
      </div>
      
    </div>
  );
}

export default Dashboard;
