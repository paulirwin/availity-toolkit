'use strict';

import React from "react"

import Notice from "./components/Notice.jsx"

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

      <form className="form" name="demoForm">
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
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter 1 letter to see validation in action" />

                  </div>

                  <div className="form-group">
                    <label htmlFor="noIcon">Date of Birth</label>
                    <input type="text"
                           className="form-control"
                           id="noIcon"
                           placeholder="When were you born?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="dropdownStates1">Favorite State</label>
                    <select
                      id="dropdownStates1"
                      className="form-control select2"
                      data-placeholder="Select State"
                      data-allow-clear="true">
                      <option value="" />
                    </select>
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
          <input type="submit" className="btn btn-primary form-controls-right" value="Next" />
        </div>
      </form>

      <Notice />

    </div>;
  }

}
