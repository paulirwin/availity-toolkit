import React from "react"

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ""
    };
  }

  componentWillMount() {

    if (this.props.required) {
      if (Array.isArray(this.props.validations)) {
        this.props.validations.push("isValue");
      } else if (typeof this.props.validations === "string") {
        this.props.validations += this.props.validations.length ? ",isValue" : "isValue";
      } else {
        this.props.validations = ["isValue"];
      }
    }

    this.props.attachToForm(this);
  }

  componentWillUnmount() {
    this.props.detachFromForm(this);
  }

  setValue(e) {
    this.setState({
      value: e.currentTarget.value
    }, () => this.props.validate(this));
  }

  render() {

    const isValid = this.state.isValid;
    const className = isValid ? "" : "error";

    const { validate, validations, validationError, attachToForm, detachFromForm, ...otherProps } = this.props;

    return <div className={className}>
      <input {...otherProps} onChange={this.setValue.bind(this)} value={this.state.value} />
      <p className="help-block">{isValid ? null : this.props.validationError}</p>
    </div>;
  }

}
