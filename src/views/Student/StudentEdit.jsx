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
import {
    getStudentRequest,
    updateStudentRequest
} from '../../reducers/student/StudentAction';

import { connect } from 'react-redux';

const data = [
    {"label" : "select Me", "value" : "1"},
    {"label" : "select Them", "value" : "2"},
    {"label" : "select you", "value" : "3"},
]

class StudentEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: "",
            name: "",
            matricule: "",
            level: "",
            department: "",
            email: "",
            staff: true,
            password: ""
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    componentWillMount() {

        const id = this.props.match.params.data;

        this.props.getStudentRequest(id).then(
            res => {
                this.setState({
                    id,
                    username: res.data.username,
                    name: res.data.student.name,
                    matricule: res.data.student.matricule,
                    level: res.data.student.level,
                    department: res.data.student.department,
                    email: res.data.email,
                    staff: res.data.student,
                })
            }
        );

    }

    onSubmit(e) {
        e.preventDefault();
        console.log("Zumbie", this.state)
        this.props.updateStudentRequest(this.state, this.state.id)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
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
                  avatar={"new"}
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

export default connect(null, {
                                getStudentRequest,
                                updateStudentRequest
                            })(StudentEdit);
