import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Row } from "react-bootstrap";

function FieldGroup({ label, ...props }) {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} ></FormControl>
    </FormGroup>
  );
}

export class FormInputs extends Component {
  render() {
    var row = [];
    for (var i = 0; i < this.props.ncols.length; i++) {
      row.push(
        <div key={i} className={this.props.ncols[i]}>
          <FieldGroup {...this.props.proprieties[i]} />
        </div>
      );
    }
    return <Row>{row}</Row>;
  }
}

export class SelectInputs extends Component {
  render() {
    return (
        <div>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>{this.props.label}</ControlLabel>
              <FormControl componentClass="select" placeholder="select" onChange={this.props.onChange} name={this.props.name} >
                  <option value="select">select</option>
                  {this.props.data.map((prop, key) => {
                      return <option value={prop.value}>{prop.label}</option>
                  })}
              </FormControl>
            </FormGroup>
        </div>
    )
  }
}

export default FormInputs;
