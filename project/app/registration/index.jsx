import React from "react";

import {globals, AvDate, AvSelect} from "../availity-react";
import {AvForm, AvField, AvInput, AvFeedback, AvGroup} from "availity-reactstrap-validation";
import {Tooltip, Button, FormGroup, Label, Row, Container, Breadcrumb, BreadcrumbItem} from "reactstrap";

import Notice from "./components/Notice.jsx";

export default class Registration extends React.Component {
  state = {};
  reset = () => this.form.reset();
  toggle = () => this.setState({tooltipOpen: !this.state.tooltipOpen});

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
          Toolkit
        </BreadcrumbItem>
      </Breadcrumb>
      <h1>
        <span className="app-icon app-icon-black">ai</span>
        <span className="app-icon-title">h1. Application Title</span>
      </h1>

      <AvForm ref={c => this.form = c} >
        <div className="panel panel-card">
          <div className="panel-body">
            <Container fluid={true}>
              <Row>
                <h3 className="subheader panel-header">User Profile</h3>

                <AvGroup>
                  <Label for="name">
                    Name
                    <span className="inline-help" id="tipExample">
                      What's this?
                    </span>
                    <Tooltip placement="top" target="tipExample" toggle={this.toggle} isOpen={this.state.tooltipOpen}>
                      A word or set of words by which a person, animal, place, or thing is known, addressed, or referred
                    </Tooltip>
                  </Label>
                  <AvInput
                    id="name"
                    name="name"
                    required
                    placeholder="Enter 1 letter to see validation in action"
                    minLength="2"
                  />
                  <AvFeedback>Please enter at least 2 characters for the name field.</AvFeedback>
                </AvGroup>

                <AvGroup>
                  <Label for="dob">Date of Birth</Label>
                  <AvDate
                    type="date"
                    name="dob"
                    placeholder="When were you born?"
                    required
                  />
                  <AvFeedback>Please select a valid date.</AvFeedback>
                </AvGroup>

                <AvGroup>
                  <Label for="dropdownStates1">Favorite State</Label>
                  <AvSelect
                    options={globals.REGIONS}
                    valueKey="code"
                    labelKey="name"
                    name="dropdownStates1"
                    placeholder="Select State"
                  />
                </AvGroup>
              </Row>
            </Container>
          </div>
        </div>

        <FormGroup>
          <Button type="button" color="default" onClick={this.reset}>Clear</Button>{' '}
          <Button color="info">Show</Button>
          <Button type="submit" color="primary" className="form-controls-right">Next</Button>
        </FormGroup>
      </AvForm>

      <Notice />

    </div>;
  }

}
