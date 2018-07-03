import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import { connect } from "react-redux";

import { getStudentsRequest } from "reducers/student/StudentAction";

class Student extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentWillMount() {
        this.props.getStudentsRequest();
    }

    shouldComponentUpdate() {
        return true;
    }
  render() {
      const {
          students
      } = this.props;

      console.log(students);
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Link to="/dashboard/student-add/"><button type="button" class="btn btn-success">Add Student</button></Link>
              <Card
                title="List of Student"
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
                      {students.map((prop, key) => {
                        if(prop.is_staff)
                            return null
                        return (
                          <tr key={key}>
                            <td>{prop.student.matricule}</td>
                            <td>{prop.student.name}</td>
                            <td>{prop.student.department}</td>
                            <td>{prop.email}</td>
                            <td>{prop.student.level}</td>

                            <td>
                                <Link to={"/dashboard/student-edit/"+prop.id}><button type="button" class="btn btn-primary">Edit</button></Link>
                            </td>

                            <td><button type="button" class="btn btn-danger">Delete</button></td>
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
    getStudentsRequest
}

const mapStateProps = (state) => {
    return {
        students: state.StudentReducer.students
    }
}
export default connect(mapStateProps, mapDispatchToProps)(Student);
