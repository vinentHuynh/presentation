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
    <div className="body">
      <div className="works">Experiences and Projects</div>

      <div className="Tasks">
        <MDBRow>
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
                  for future developers. Modernization of code consists of
                  Datadog integration, unit testing, best practices for code
                  design and resource design.
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
                Data Transfer Object
              </MDBCardHeader>
              <MDBCardBody>
                <MDBCardText>
                  Researched and created a proof of concept of a way to validate
                  data coming into Lambda functions. As a result, it will become
                  a standard practice.
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
                  order to reduce load. This will reduce the manual oversight on
                  LoadView and reduce database costs.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};
export default Body;
