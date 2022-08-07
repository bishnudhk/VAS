import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
const VaccineAppointment : React.FC = () => {
  const navigate = useNavigate();

  const addButton = () => {
    navigate({ pathname: "/addVaccineAppointment" });
  };
  return (
    <div>
      <Navbar />
      <div className="addBtn">
        <Button onClick={addButton}>Add Appointment</Button>
      </div>
    </div>
  );
};

export default VaccineAppointment;
