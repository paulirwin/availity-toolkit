import "react-select2-wrapper/css/select2.css";

import React from "react";
import Select2 from "react-select2-wrapper";

import {globals} from "../availity-react";
import {AvForm, AvField, AvInput} from "availity-reactstrap-validation";
import {Button, FormGroup, Label, Row, Container, Breadcrumb, BreadcrumbItem} from "reactstrap";

import Notice from "./components/Notice.jsx";

export default class Registration extends React.Component {

  render() {
    return <div className="container-sm">

      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#">Spaces</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          My Application
        </BreadcrumbItem>
      </Breadcrumb>
      <h1>
        <span className="app-icon app-icon-black">ai</span>
        <span className="app-icon-title">h1. Application Title</span>
      </h1>

      <AvForm>
        <div className="panel panel-card">
          <div className="panel-body">
            <Container fluid="true">
              <Row>
                <h3 className="subheader panel-header">User Profile</h3>

                <FormGroup>
                  <Label for="name">
                    Name
                    <span className="inline-help"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="A word or set of words by which a person, animal, place, or thing is known, addressed, or referred">
                      What's this?
                    </span>
                  </Label>
                  <AvInput
                    id="name"
                    name="name"
                    required
                    placeholder="Enter 1 letter to see validation in action"
                    validations="isLength:2"
                    validationError="Name must be at least 2 characters."
                  />

                </FormGroup>

                <FormGroup>
                  <Label for="noIcon">Date of Birth</Label>
                  <AvInput
                    type="date"
                    id="dob"
                    name="dob"
                    placeholder="When were you born?"
                    validations="isDate"
                    validationError="Date of Birth must be a valid date"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="dropdownStates1">Favorite State</Label>
                  <Select2
                    id="dropdownStates1"
                    className="form-control select2"
                    data={globals.REGIONS.map(i => {
                      return {text: i.name, id: i.code};
                    })}
                    options={{
                      placeholder: "Select state"
                    }}/>
                </FormGroup>
              </Row>
            </Container>
          </div>
        </div>

        <FormGroup>
          <Button color="default">Clear</Button>
          <Button color="info">Show</Button>
          <Button type="submit" color="primary" className="form-controls-right">Next</Button>
        </FormGroup>
      </AvForm>

      <Notice />

    </div>;
  }

}
