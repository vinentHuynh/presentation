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
    <div>
      <h1 id="MBMTitle">
        Principle Based <br /> Management
      </h1>
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
    </div>
  );
}
export default MBM;
