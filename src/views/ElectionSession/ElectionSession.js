import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import { connect } from "react-redux";

import { getElectionSessionsRequest, deleteElectionSessionRequest } from "reducers/ElectionSession/ElectionSessionAction";

class ElectionSession extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.deleteElectionSession = this.deleteElectionSession.bind(this);
    }
    componentWillMount() {
        this.props.getElectionSessionsRequest();
    }

    shouldComponentUpdate() {
        return true;
    }

    deleteElectionSession(id) {
        const confirm = window.confirm("Delete student?");

        if(confirm) {
            this.props.deleteElectionSessionRequest(id);
        }

    }
  render() {
      const {
          electionSessions
      } = this.props;

      console.log(electionSessions);
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Link to="/dashboard/student-add/"><button type="button" class="btn btn-success">Add ElectionSession</button></Link>
              <Card
                title="List of ElectionSession"
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
                      {electionSessions.map((prop, key) => {
                        if(prop.is_staff)
                            return null
                        return (
                          <tr key={key}>
                            <td>{prop.electionSession.matricule}</td>
                            <td>{prop.electionSession.name}</td>
                            <td>{prop.electionSession.department}</td>
                            <td>{prop.email}</td>
                            <td>{prop.electionSession.level}</td>

                            <td>
                                <Link to={"/dashboard/student-edit/"+prop.id}><button type="button" class="btn btn-primary">Edit</button></Link>
                            </td>

                            <td><button type="button" class="btn btn-danger" onClick={(e) => this.deleteElectionSession(prop.id)}>Delete</button></td>
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
    getElectionSessionsRequest,
    deleteElectionSessionRequest
}

const mapStateProps = (state) => {
    return {
        electionSessions: state.ElectionSessionReducer.electionSessions
    }
}
export default connect(mapStateProps, mapDispatchToProps)(ElectionSession);
