import React from 'react';
import classNames from 'classnames';
import {AvBaseInput} from 'availity-reactstrap-validation';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class AvSelect extends AvBaseInput {
  componentWillUpdate (nextProps) {
    if (nextProps.values !== this.props.values) {
      this.value = undefined;
      this.setState({value: undefined});
      this.validate();
      return true;
    }
    return false;
  }

  updateValidations () {
    this.validations = Object.assign({}, this.props.validate);

    if (this.props.required) {
      this.validations.required = {value: true};
    }

    this.context.FormCtrl.register(this);
    this.validate();
  }

  componentWillMount () {
    this.value = this.getDefaultValue().value[this.props.valueKey] || '';
    this.setState({value: this.value});
    this.updateValidations();
  }

  getDefaultValue () {
    let key = 'value';

    const value = this.props[key] || this.context.FormCtrl.getDefaultValue(this.props.name) || '';

    return {key, value};
  }

  onInputHandler (value) {
    this.getValidationEvent() === 'onInput' && this.validate();
    return this.props.onInput && this.props.onInput(value);
  }

  onBlurHandler (value) {
    this.getValidationEvent() === 'onBlur' && this.validate();
    this.context.FormCtrl.setTouched(this.props.name);
    return this.props.onBlur && this.props.onBlur(value);
  }

  onFocusHandler (value) {
    this.getValidationEvent() === 'onFocus' && this.validate();
    return this.props.onFocus && this.props.onFocus(value);
  }

  onChangeHandler (value) {
    super.onChangeHandler(value[this.props.valueKey]);
  }

  getValidatorProps () {
    return {
      ...super.getValidatorProps(),
      onInputChange: this.onChangeHandler,
    };
  }

  render () {
    let {type, validate, validationEvent, state, className, ...attributes} = this.props;

    const classes = classNames(
      className,
      this.context.FormCtrl.isTouched[this.props.name] ? 'av-touched' : 'av-untouched',
      this.context.FormCtrl.isDirty[this.props.name] ? 'av-dirty' : 'av-pristine',
      this.context.FormCtrl.hasError[this.props.name] ? 'av-invalid' : 'av-valid'
    );

    const Tag = this.props.loadOptions ? Select.Async : Select;

    return (
      <Tag
        clearable={false}
        minimumInput={4}
        {...attributes}
        {...this.getValidatorProps()}
        className={classes}
        value={this.state.value}
      />
    );
  }
}
