import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Checkbox
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs, SelectInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

const data = [
    {"label" : "select Me", "value" : "1"},
    {"label" : "select Them", "value" : "2"},
    {"label" : "select you", "value" : "3"},
]

class StudentEdit extends Component {
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
    }

    componentWillMount() {
        const {
            username,
            password,
            student,
            staff,
            email
        } = this.props.location.data;

        this.setState({
            username: username,
            name: student.name,
            matricule: student.matricule,
            level: student.level,
            department: student.department,
            email: email,
            staff: staff,
            password: password
        })
    }

  render() {
      console.log(this)
    return (
        <div className="content">
          <Grid fluid>
            <Row>
              <Col md={8}>
                <Card
                  title="Edit Profile"
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
                          value={this.state.department}
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
                        Update Profile
                      </Button>
                      <div className="clearfix" />
                    </form>
                  }
                />
              </Col>
              <Col md={4}>
                <UserCard
                  bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                  avatar={avatar}
                  name="Mike Andrew"
                  userName="michael24"
                  description={
                    <span>
                      "Lamborghini Mercy <br /> Your chick she so thirsty <br /> I'm in that two seat Lambo"
                    </span>
                  }
                  socials={
                    <div>
                      <Button simple>
                        <i className="fa fa-facebook-square" />
                      </Button>
                      <Button simple>
                        <i className="fa fa-twitter" />
                      </Button>
                      <Button simple>
                        <i className="fa fa-google-plus-square" />
                      </Button>
                    </div>
                  }
                />
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}

export default StudentEdit;
