import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import Card from "components/Card/Card.jsx";
import { connect } from "react-redux";

import { getCandidatesRequest, deleteCandidateRequest } from "reducers/Candidates/CandidateAction";

const thArray = ["Matricule", "Name", "Department", "Category", "Level"];

class Candidate extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.deleteCandidate = this.deleteCandidate.bind(this);
    }
    componentWillMount() {
        this.props.getCandidatesRequest();
    }

    shouldComponentUpdate() {
        return true;
    }

    deleteCandidate(id) {
        const confirm = window.confirm("Delete student?");

        if(confirm) {
            this.props.deleteCandidateRequest(id);
        }

    }
  render() {
      const {
          candidates
      } = this.props;

      console.log(candidates);
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Link to="/dashboard/candidate-add/"><button type="button" class="btn btn-success">Add Candidate</button></Link>
              <Card
                title="List of Candidate"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {candidates.map((prop, key) => {
                        if(prop.is_staff)
                            return null
                        return (
                          <tr key={key}>
                            <td>{prop.student.matricule}</td>
                            <td>{prop.student.name}</td>
                            <td>{prop.student.department}</td>
                            <td>{prop.position}</td>
                            <td>{prop.student.level}</td>

                            <td>
                                <Link to={"/dashboard/candidate-edit/"+prop.id}><button type="button" class="btn btn-primary">Edit</button></Link>
                            </td>

                            <td><button type="button" class="btn btn-danger" onClick={(e) => this.deleteCandidate(prop.id)}>Delete</button></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
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
    getCandidatesRequest,
    deleteCandidateRequest
}

const mapStateProps = (state) => {
    return {
        candidates: state.CandidateReducer.candidates
    }
}
export default connect(mapStateProps, mapDispatchToProps)(Candidate);
