import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import {Button} from 'reactstrap';
import {AvInput} from 'availity-reactstrap-validation';
import {inputType, isoDateFormat} from 'availity-reactstrap-validation/lib/AvValidator/utils';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

export default class AvDate extends Component {
  static propTypes = AvInput.propTypes;

  static contextTypes = {
    FormCtrl: PropTypes.object.isRequired,
  };

  constructor (props) {
    super(props);

    this.togglePicker = ::this.togglePicker;
    this.onFieldChange = ::this.onFieldChange;
    this.onPickerChange = ::this.onPickerChange;
    this.state = {open: false};
    if (props.type.toLowerCase() === 'date' && inputType.date) {
      this.state.format = isoDateFormat;
    } else {
      this.state.format = props.validate && props.validate.date && props.validate.date.format || 'MM/DD/YYYY';
    }
  }

  togglePicker () {
    this.setState({open: !this.state.open});
  }

  onFieldChange (event) {
    const value = event && event.target ? event.target.value : event;
    this.setState({value, open: false});
    this.props.onChange && this.props.onChange(event);
  }

  onPickerChange (value) {
    !this.context.FormCtrl.isTouched[this.props.name] && this.context.FormCtrl.setTouched(this.props.name);
    this.setState({value: value.format(this.state.format), open: false});
    this.props.onChange && this.props.onChange(event);
  }

  render () {
    return (
      <div className="input-group">
        <AvInput
          placeholder={this.state.format.toLowerCase()}
          {...this.props}
          onChange={this.onFieldChange} value={this.state.value || ''}
          className={classNames('has-datepicker', this.props.className)}
        />
        <span className="input-group-btn">
          <Button color="secondary" type="button" onClick={this.togglePicker}>
            <span className="icon icon-calendar" />
          </Button>
        </span>
        <Datetime
          open={this.state.open}
          timeFormat={false}
          dateFormat={this.state.format}
          input={false}
          onChange={this.onPickerChange}
          value={this.state.value}
        />
      </div>
    );
  }
}
