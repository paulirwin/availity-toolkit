import React from "react";
import validator from "validator";

// credit: http://christianalfoni.github.io/javascript/2014/10/22/nailing-that-validation-with-reactjs.html

export default class Form extends React.Component {

  constructor(props) {
    super(props);

    this.inputs = {};
    this.state = {
      isValid: true
    };
  }

  componentDidMount() {
    this.validateForm();
  }

  attachToForm(component) {
    this.inputs[component.props.name] = component;

    this.validate(component);
  }

  detachFromForm(component) {
    delete this.inputs[component.props.name];
  }

  validate(component) {
    if (!component.props.validations) {
      return;
    }

    let isValid = true;

    if (component.state.value || component.props.required) {
      let validations = component.props.validations;

      if (typeof validations === "string") {
        validations = validations.split(",");
      }

      for (const validation of validations) {
        if (typeof validation === "string") {
          isValid = isValid && this.parseStringValidation(validation, component);
        } else if (typeof validation === "function") {
          isValid = isValid && validation(component);
        }
      }
    }

    component.setState({isValid}, this.validateForm.bind(this));
  }

  validateForm() {
    let isValid = true;

    let inputs = this.inputs;
    Object.keys(inputs).forEach(name => {
      isValid = isValid && inputs[name].state.isValid;
    });

    this.setState({isValid});
  }

  parseStringValidation(validation, component) {
    // By splitting on ":"" we get an array of arguments that we pass
    // to the validator. ex.: isLength:5 -> ['isLength', '5']
    let args = validation.split(":");

    // We remove the top item and are left with the method to
    // call the validator with ['isLength', '5'] -> 'isLength'
    const validateMethod = args.shift();

    // We use JSON.parse to convert the string values passed to the
    // correct type. Ex. 'isLength:1' will make '1' actually a number
    args = args.map(arg => JSON.parse(arg));

    // We then merge two arrays, ending up with the value
    // to pass first, then options, if any. ['valueFromInput', 5]
    args = [component.state.value].concat(args);

    // So the next line of code is actually:
    // validator.isLength('valueFromInput', 5)
    return validator[validateMethod].apply(validator, args);
  }

  onSubmit(e) {
    e.preventDefault();
    return false;
  }

  render() {

    const addValidationProps = (e) => {
      if (!e.type) return e;

      let newProps = null,
        children = null;

      if (e.type.name === "Input") {
        newProps = {
          validate: this.validate.bind(this),
          attachToForm: this.attachToForm.bind(this),
          detachFromForm: this.detachFromForm.bind(this)
        };
      }

      if (e.props && e.props.children) {
        children = React.Children.map(e.props.children, c => addValidationProps(c));
      }

      return React.cloneElement(e, newProps, children);
    };

    return <form {...this.props} onSubmit={this.onSubmit}>
      {React.Children.map(this.props.children, i => addValidationProps(i))}
    </form>;
  }

}

