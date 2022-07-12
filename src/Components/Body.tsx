import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from "mdb-react-ui-kit";

const Body = () => {
  return (
    <div>
      <div className="works">What I have done</div>

      <div className="Tasks">
        <MDBCol>
          <MDBCard
            className="mb-3"
            style={{ border: "3px solid aquamarine", padding: ".5rem" }}
          >
            <MDBCardHeader style={{ fontSize: "1.5rem", color: "black" }}>
              Repo Modernization
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>
                Modernize code in order to streamline the development process
                for future developers.
              </MDBCardText>
            </MDBCardBody>
            <MDBListGroup flush>
              <MDBListGroupItem>BOL Sync </MDBListGroupItem>
              <MDBListGroupItem>Max Preset</MDBListGroupItem>
              <MDBListGroupItem>Loading Transaction</MDBListGroupItem>
              <MDBListGroupItem>Carrier Sync</MDBListGroupItem>
            </MDBListGroup>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className="mb-3 "
            style={{
              border: "3px solid aquamarine",
              padding: ".5rem",
            }}
          >
            <MDBCardHeader style={{ fontSize: "1.5rem", color: "black" }}>
              DTO
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>
                Researched and created a proof of concept of a way to validate
                data comming into Lambda functions
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard
            className="mb-3 "
            style={{
              border: "3px solid aquamarine",
              padding: ".5rem",
            }}
          >
            <MDBCardHeader style={{ fontSize: "1.5rem", color: "black" }}>
              RDS Proxy
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>
                Created a proxy between API calls and the database in AWS in
                order to reduce load
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    </div>
  );
};
export default Body;
