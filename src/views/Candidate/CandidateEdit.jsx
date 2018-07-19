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
    getCandidateRequest,
    updateCandidateRequest
} from '../../reducers/Candidates/CandidateAction';

import { connect } from 'react-redux';

const data = [
    {"label" : "President", "value" : "1"},
    {"label" : "Vice President", "value" : "2"},
    {"label" : "Secretary", "value" : "3"},
    {"label" : "Vice Secretary", "value" : "3"},
    {"label" : "Treasurer", "value" : "3"},
    {"label" : "Sport Delegate", "value" : "3"},
]

const data1 = [
    {"label" : "Ngu suleman", "value" : "1"},
    {"label" : "Brandon kitcha", "value" : "2"},
    {"label" : "Bih Sonita", "value" : "3"},
]

class CandidateEdit extends Component {
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

        this.props.getCandidateRequest(id).then(
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
        this.props.updateCandidateRequest(this.state, this.state.id)
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
                <Col md={12}>
                  <Card
                    title="Edit Candidate"
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

export default connect(null, {
                                getCandidateRequest,
                                updateCandidateRequest
                            })(CandidateEdit);
