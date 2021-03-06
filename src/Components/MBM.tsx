import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import React from "react";
import "./style.css";
function MBM() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <div className="Cards">
        <MDBCard
          className="mb-3"
          style={{
            width: "35rem",
            border: "2px solid aquamarine",
            padding: "1rem",
          }}
        >
          <MDBCardHeader style={{ fontSize: "3rem", color: "Black" }}>
            Virtue and Talents
          </MDBCardHeader>
          <MDBCardBody style={{ fontSize: "1.2rem" }}>
            "The responsibility of supervisors is to ensure each employee is in
            the right role, has the right responsibilities and the opportunity
            to self-actualize."
          </MDBCardBody>
        </MDBCard>
      </div>
      <h1 className="MBMTitle">
        Principle Based <br /> Management
      </h1>
    </div>
  );
}
export default MBM;
