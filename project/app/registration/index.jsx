import "react-select2-wrapper/css/select2.css";

import React from "react";
import Select2 from "react-select2-wrapper";

import { Form, Input, globals } from "../availity-react";

import Notice from "./components/Notice.jsx";

export default class Registration extends React.Component {

  render() {
    return <div className="container-sm">

      <ul className="breadcrumb">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Spaces</a>
        </li>
        <li className="active">
          My Application
        </li>
      </ul>
      <h1>
        <span className="app-icon app-icon-black">ai</span>
        <span className="app-icon-title">h1. Application Title</span>
      </h1>

      <Form className="form" name="demoForm">
        <div className="panel panel-card">
          <div className="panel-body">
            <div className="container-fluid">
              <div className="row">
                <div>
                  <h3 className="subheader panel-header">User Profile</h3>

                  <div className="form-group">
                    <label htmlFor="name">
                      Name
                      <span className="inline-help"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="A word or set of words by which a person, animal, place, or thing is known, addressed, or referred"
                      >
                    What's this?
                  </span>
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter 1 letter to see validation in action"
                      validations="isLength:2"
                      validationError="Name must be at least 2 characters."
                    />

                  </div>

                  <div className="form-group">
                    <label htmlFor="noIcon">Date of Birth</label>
                    <Input type="date"
                           className="form-control"
                           id="dob"
                           name="dob"
                           placeholder="When were you born?"
                           validations="isDate"
                           validationError="Date of Birth must be a valid date"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="dropdownStates1">Favorite State</label>
                    <Select2
                      id="dropdownStates1"
                      className="form-control select2"
                      data={globals.REGIONS.map(i => { return { text: i.name, id: i.code }; })}
                      options={{
                        placeholder: "Select state"
                      }} />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-controls">
          <button type="button" className="btn btn-default">Clear</button>
          <button
            type="button"
            className="btn btn-info">
            Show
          </button>
          <input type="submit" className="btn btn-primary form-controls-right" value="Next"/>
        </div>
      </Form>

      <Notice />

    </div>;
  }

}
