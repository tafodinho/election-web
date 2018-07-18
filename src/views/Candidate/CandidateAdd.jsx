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

import { createCandidateRequest } from "reducers/Candidates/CandidateAction";
import { getStudentsRequest } from "reducers/student/StudentAction";

import avatar from "assets/img/faces/face-3.jpg";
import { connect } from "react-redux";

const data = [
    {"label" : "President", "value" : "1"},
    {"label" : "Vice President", "value" : "2"},
    {"label" : "Secretary", "value" : "3"},
    {"label" : "Vice Secretary", "value" : "3"},
    {"label" : "Treasurer", "value" : "3"},
    {"label" : "Sport Delegate", "value" : "3"},
]

class CandidateAdd extends Component {
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
      this.newArray = this.newArray.bind(this);
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onClick = this.onClick.bind(this);

  }
  componentWillMount(){
      this.props.getStudentsRequest();
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
      this.props.createCandidateRequest(finalData);
      console.log(finalData);

  }

  newArray(arr) {
      const newArray = (arr.map((prop, key) => {
         return {label: prop.student.name, value: prop.student.id}
      }))

      return newArray;
  }

  render() {
      const {
          students
      } = this.props;
      console.log("STUDENTS", this.props)
      const data1 = this.newArray(students);
      
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Add Candidate"
                content={
                <form onSubmit={this.onSubmit}>

                <Col md={6}>
                    <SelectInputs
                        label = "Category   "
                        data = {data}
                        name = "department"
                        onChange = {this.onChange}
                    />
                </Col>
                <Col md={6}>
                    <SelectInputs
                        label = "Student"
                        data = {data1}
                        name = "department"
                        onChange = {this.onChange}
                    />
                </Col>
                    <Button bsStyle="info" pullRight fill type="submit">
                        Add Candidate
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
  createCandidateRequest,
  getStudentsRequest
}

const mapStateToProps = (state) => {
    return {
        students: state.StudentReducer.students
    }
}

export default connect(null, mapDispatchToProps)(CandidateAdd);
