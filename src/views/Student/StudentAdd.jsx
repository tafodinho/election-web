import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Checkbox
} from "react-bootstrap";
import PropTypes from "prop-types";

import { Card } from "components/Card/Card.jsx";
import { FormInputs, SelectInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import { createStudentRequest } from "reducers/student/StudentAction";

import avatar from "assets/img/faces/face-3.jpg";
import { connect } from "react-redux";

const data = [
    {"label" : "Computer Engineering", "value" : "1"},
    {"label" : "Electrical Engineering", "value" : "2"},
]

class StudentAdd extends Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          name: "",
          matricule: "",
          level: "",
          department: "",
          email: "",
          staff: true,
          password: ""
      }

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onClick = this.onClick.bind(this);

  }

  onChange(e) {
     this.setState({ [e.target.name] : e.target.value})
  }

  onClick(e) {
      this.setState({ [e.target.name] : !this.state.staff})
      console.log(this.state.staff);
  }

  onSubmit(e) {
      e.preventDefault();
      const finalData = {
            "username": this.state.username,
            "password": this.state.password,
            "student": {
                "name": this.state.name,
                "matricule": this.state.matricule,
                "level": this.state.level,
                "department": this.state.department
            },
            "email": this.state.email,
            "is_staff": this.state.staff
        }
      this.props.createStudentRequest(finalData);
      console.log(finalData);

  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Add Profile"
                content={
                  <form onSubmit={this.onSubmit}>
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Username",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Enter Username",
                          value: this.state.username,
                          name: "username",
                          onChange: this.onChange
                        },
                        {
                          label: "Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Enter Name",
                          value: this.state.name,
                          name: "name",
                          onChange: this.onChange
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Matricule",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Enter Matricule Number",
                          value: this.state.matricule,
                          name: "matricule",
                          onChange: this.onChange
                        },
                        {
                          label: "email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Enter emal address",
                          value: this.state.email,
                          name: "email",
                          onChange: this.onChange
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Password",
                          type: "password",
                          bsClass: "form-control",
                          placeholder: "Enter Password",
                          value: this.state.password,
                          name: "password",
                          onChange: this.onChange
                        },
                        {
                          label: "Level",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "Enter Level",
                          value: this.state.level,
                          name: "level",
                          onChange: this.onChange
                        }
                      ]}
                    />
                <Col md={6}>
                    <SelectInputs
                        label = "Department"
                        data = {data}
                        name = "department"
                        onChange = {this.onChange}
                    />
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <ControlLabel>Staff</ControlLabel>
                      <Checkbox
                          checked = {this.state.staff}
                          value = {this.state.staff}
                          name = "staff"
                          onClick = {this.onClick}
                          >
                      </Checkbox>
                    </FormGroup>
                </Col>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Create Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createStudentRequest
}

export default connect(null, mapDispatchToProps)(StudentAdd);
